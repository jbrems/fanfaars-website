import * as admin from 'firebase-admin';
const got = require('got');

export async function updatePhotoAlbumsFromFlickr() {
  console.log('Updating photo albums from Flickr');
  const albums = await fetchAlbums();
  console.log(`Fetched ${albums.length} from Flickr`);
  await deletePhotoAlbums();
  console.log(`Deleted albums from Firestore`);
  addPhotoAlbums(albums);
  console.log(`Inserted albums from Flickr`);
  return `Database updated with ${albums.length} photo albums`;
}

async function fetchAlbums() {
  const config = await fetchConfig();
  const response = await got(`https://www.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=${config.flickrApiKey}&user_id=${config.flickrUserId}&primary_photo_extras=url_m&format=json&nojsoncallback=1`);
  console.log(response.body);
  const body = JSON.parse(response.body);
  if (!body || !body.photosets || !body.photosets.photoset) { throw new Error('Unable to fetch albums from Flickr'); }
  return mapFlickrResponse(body.photosets.photoset);
}

async function fetchConfig() {
  console.log('Fetching config');
  const configRef = await admin.firestore().doc('/config/production').get();
  const config = await configRef.data();
  if (!config) { throw new Error('Unable to fetch config'); }
  console.log(`Fetched config ${JSON.stringify(config)}`);
  return config;
}

function mapFlickrResponse(flickrAlbums: any[]) {
  return flickrAlbums.map((photoset => {
    return {
      id: `${getDateFromTitle(photoset.title._content)}_${getGroupFromTitle(photoset.title._content)}_${photoset.id}`,
      group: getGroupFromTitle(photoset.title._content),
      title: getTitleFromTitle(photoset.title._content),
      date: getDateFromTitle(photoset.title._content),
      url: `https://www.flickr.com/photos/fanfareblaasveld/albums/${photoset.id}`,
      image: photoset.primary_photo_extras.url_m,
    }
  }));
}

function getGroupFromTitle(title: string): string {
  if (title.toUpperCase().includes('F4F')) { return 'F4F'; }
  if (title.toUpperCase().includes('RAKKERS')) { return 'MR'; }
  if (title.toUpperCase().includes('MM')) { return 'MM'; }
  if (title.toUpperCase().includes('FF')) { return 'FF'; }

  console.log(`Failed to parse group for photo album ${title}`);
  return 'FF';
}

function getDateFromTitle(title: string): string {
  // Try to find a full date in yyyy/mm/dd format and return it as yyyy-mm-dd
  let match = title.match(/.*(\d{4}\/\d{2}\/\d{2}).*/);
  if (match) { return match[1].replace(/\//g, '-'); }

  // Try to find a date in yyyy/mm format and return it as yyyy-mm-00
  match = title.match(/.*(\d{4}\/\d{2}).*/);
  if (match) { return match[1].replace(/\//g, '-') + '-00'; }

  // Try to find a date in yyyy format and return it as yyyy-00-00
  match = title.match(/.*(\d{4}).*/);
  if (match) { return match[1].replace(/\//g, '-') + '-00-00'; }

  console.log(`Failed to parse date for photo album ${title}`);
  return '0000-00-00';
}

function getTitleFromTitle(title: string): string {
  // Try to parse the title as GR yyyy/mm/dd ... (where GR stand for group)
  let match = title.match(/(..\s\d{4}\/\d{2}\/\d{2})\s(.*)/);
  if (match) { return match[2]; }

  // Try to parse the title as yyyy/mm/dd GR ... (where GR stand for group)
  match = title.match(/(\d{4}\/\d{2}\/\d{2}\s..)\s(.*)/);
  if (match) { return match[2]; }

  // Try to parse the title as GR yyyy/mm ... (where GR stand for group)
  match = title.match(/(..\s\d{4}\/\d{2})\s(.*)/);
  if (match) { return match[2]; }

  // Try to parse the title as GR yyyy ... (where GR stand for group)
  match = title.match(/(..\s\d{4})\s(.*)/);
  if (match) { return match[2]; }

  console.log(`Failed to parse title for photo album ${title}`);
  return title;
}

async function deletePhotoAlbums() {
  const albums = await admin.firestore().collection('photoalbums').get();
  const batch = admin.firestore().batch();
  albums.forEach(doc => {
    batch.delete(doc.ref);
  });
  await batch.commit();
  console.log(`${albums.size} albums deleted from database`);
}

function addPhotoAlbums(albums: any[]) {
  albums.forEach(album => admin.firestore().collection('photoalbums').doc(album.id).set(album));
  console.log(`${albums.length} albums added to the database`);
}
