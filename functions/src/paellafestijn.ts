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
      ${ reservation.menu.paella ? '<br/>Paella: <strong>' + reservation.menu.paella + '</strong>' : '' }
      ${ reservation.menu.tapa ? '<br/>Koude Tapas: <strong>' + reservation.menu.tapa + '</strong>' : '' }
      ${ reservation.menu.cava ? '<br/>Fles Cava: <strong>' + reservation.menu.cava + '</strong>' : '' }
      ${ reservation.menu.wine ? '<br/>Fles Witte wijn: <strong>' + reservation.menu.wine + '</strong>' : '' }
      ${ reservation.remarks ? '<br/><br/>Opmerking: ' + reservation.remarks : '' }
    </div>
    <br/>
    ${ reservation.takeaway ? 'De bestelling kan worden afgehaald op zondag 28 juni ' + reservation.takeawayPeriod + ' in het Parochiaal Centrum van Blaasveld.' : ''}
    ${ reservation.delivery ? 'De bestelling wordt op zondag 28 juni ' + reservation.deliveryPeriod + ' geleverd bij ' + reservation.street + ', ' + reservation.city + '.' : '' }
    <br/><br/>
    ${ reservation.transfer ? 'Gelieve ' + reservation.totalAmount + '€ over te schrijven op rekening BE39 7895 8983 7719 met vermelding van "Paella ' + reservation.name + '".' : '' }
    ${ reservation.cash ? 'Gelieve ' + reservation.totalAmount + '€ (gepast) klaar te houden.' : ''}

    <br/><br/>
    Met muzikale groeten,
    <br/>Koninklijke Fanfare De Vrienden van 't Recht VZW Blaasveld

    <br/><br/>
    <table style="color:gray; font-size: 0.65em; border: solid 1px gray;"><tr>
      <td>${reservation.name}</td>
      <td>${reservation.email}</td>
      <td>${reservation.phone}</td>
      <td>${reservation.takeaway ? 'AFHALEN' : 'LEVEREN'}</td>
      <td>${reservation.takeaway ? reservation.takeawayPeriod : reservation.deliveryPeriod}</td>
      <td>${reservation.paella}</td>
      <td>${reservation.tapa}</td>
      <td>${reservation.cava}</td>
      <td>${reservation.wine}</td>
      <td>${reservation.delivery ? reservation.street : ''}</td>
      <td>${reservation.delivery ? reservation.city : ''}</td>
      <td>${reservation.transfer ? 'OVERSCHRIJVING' : 'CASH'}</td>
      <td>${reservation.totalAmount}</td>
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
