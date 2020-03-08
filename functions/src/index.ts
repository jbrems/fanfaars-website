import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import { updatePhotoAlbumsFromFlickr } from './photo-albums';
import { processForellenfestijnReservation } from './forellenfestijn';

export const updatePhotoAlbums = functions.https.onRequest(async (req, res) => {
  try {
    const message = await updatePhotoAlbumsFromFlickr();
    res.send(message);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to update Flickr albums');
  }
});

export const processReservation = functions.firestore
  .document('forellenfestijn/{reservationId}')
  .onCreate((snapshot, context) => {
    return processForellenfestijnReservation(snapshot.data());
  });

export const testProcessReservation = functions.https.onRequest(async (req, res) => {
  try {
    await processForellenfestijnReservation({
      name: 'Jonas Brems',
      email: 'jonasbrems@gmail.com',
      persons: 12,
      arrival: '17:00',
      remarks: 'Ik zit graag aan een tafel',
      menu: {
        soup: 5,
        melon: 1,
        troutNature: 9,
        troutAlmond: 2,
        troutWine: 3,
        troutArdennaise: 5,
        volAuVent: 1,
        volAuVentChild: 4,
      }
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});
