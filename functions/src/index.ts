import * as admin from 'firebase-admin';
try {
  admin.initializeApp();
} catch (error) {

}
import { updatePhotoAlbumsFromFlickr } from './photo-albums';
import { processForellenfestijnReservation } from './forellenfestijn';
import { processPaellafestijnReservation } from './paellafestijn';
import { onDocumentCreated } from 'firebase-functions/firestore';
import { onRequest } from 'firebase-functions/https';

export const updatePhotoAlbumsV2 = onRequest({ cors: true }, async (req, res) => {
  try {
    const message = await updatePhotoAlbumsFromFlickr();
    res.send(message);
  } catch (error) {
    console.error(error);
    res.status(500).send('Unable to update Flickr albums');
  }
});

export const processPaellaReservationV2 = onDocumentCreated('paella/{reservationId}', (event) => {
  return processPaellafestijnReservation(event.data?.data());
});

export const processReservationV2 = onDocumentCreated('forellenfestijn/{reservationId}', (event) => {
  return processForellenfestijnReservation(event.data?.data());
});

export const testProcessReservationV2 = onRequest({ cors: true }, async (req, res) => {
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
