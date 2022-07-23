import { gmailAuth } from './gmail-auth';
const nodemailer = require('nodemailer');

export async function processPaellafestijnReservation(reservation: any) {
  console.log('Processing paellafestijn reservation', reservation);
  const mailContent = generateMailContent(reservation);
  return sendEmail(reservation.email, 'Reservatie Paella', mailContent);
}

function generateMailContent(reservation: any) {
  return `
    Beste ${reservation.name},
    <br/><br/>Wij hebben uw reservatie via <a href="https://www.fanfaars.com/">www.fanfaars.com</a> ontvangen en verwerkt.
    <br/><br/>Hieronder vindt u de reservatie die wij voor u hebben genoteerd:
    <div style="margin: 10px 0; padding: 10px; border: solid 1px #bd0000; border-radius: 5px;">
      Naam: ${reservation.name}
      <br>E-mail: ${reservation.email}
      <br>Telefoonnummer: ${reservation.phone}
      <br>
      <br>Uur van aankomst: ${reservation.arrival}
      <br>Aantal personen: ${reservation.persons}
      <br>
      ${ reservation.menu.tapa ? '<br/>Tapas: <strong>' + reservation.menu.tapa + '</strong>' : '' }
      ${ reservation.menu.paella ? '<br/>Paella: <strong>' + reservation.menu.paella + '</strong>' : '' }
      ${ reservation.menu.albondigas ? '<br/>Albóndigas: <strong>' + reservation.menu.albondigas + '</strong>' : '' }
      ${ reservation.remarks ? '<br/><br/>Opmerking: ' + reservation.remarks : '' }
    </div>
    <br/>
    U wordt hartelijk onthaald op zondag 5 juni ${reservation.arrival} in het Parochiaal Centrum van Blaasveld.
    <br/><br/>

    Met muzikale groeten,
    <br/>Koninklijke Fanfare De Vrienden van 't Recht VZW Blaasveld

    <br/><br/>
    <table style="color:gray; font-size: 0.65em; border: solid 1px gray;"><tr>
      <td>${reservation.name}</td>
      <td>${reservation.email}</td>
      <td>${reservation.phone}</td>
      <td>${reservation.persons}</td>
      <td>${reservation.arrival}</td>
      <td>${reservation.menu.tapa}</td>
      <td>${reservation.menu.paella}</td>
      <td>${reservation.menu.albondigas}</td>
      <td>${reservation.remarks}</td>
    </tr></table>
  `;
}

async function sendEmail(to: string, subject: string, html: string) {
  const transport = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: gmailAuth,
  });

  const options = {
    from: 'Fanfare Blaasveld <forellenfestijn@gmail.com>',
    to: [to, 'fanfaars@gmail.com'],
    subject,
    html,
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(options, (err: any) => {
      if (err) {
        console.error(err);
        reject('Failed to send email');
      }
      resolve('Mail sent');
    });
  });
}
