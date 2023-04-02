import { gmailAuth } from './gmail-auth';
const nodemailer = require('nodemailer');

export async function processForellenfestijnReservation(reservation: any) {
  console.log('Processing forellenfestijn reservation', reservation);
  const mailContent = generateMailContent(reservation);
  return sendEmail(reservation.email, 'Reservatie forellenfestijn', mailContent);
}

function generateMailContent(reservation: any) {
  return `
    Beste ${reservation.name},
    <br/><br/>Wij hebben uw reservatie via <a href="https://www.fanfaars.com/">www.fanfaars.com</a> ontvangen en verwerkt.
    <br/><br/>Hieronder vindt u de reservatie die wij voor u hebben genoteerd:
    <div style="margin: 10px 0; padding: 10px; border: solid 1px #bd0000; border-radius: 5px;">
      Naam: <strong>${reservation.name}</strong>
      <br/>Komt met <strong>${reservation.persons}</strong> personen omstreeks <strong>${reservation.arrival}</strong> uur.
      ${ reservation.remarks ? '<br/>Met opmerking: <strong>' + reservation.remarks + '</strong>' : '' }
      <br/>
      ${ reservation.menu.soup ? '<br/>Zachte paprikasoep: <strong>' + reservation.menu.soup + '</strong>' : '' }
      ${ reservation.menu.melon ? '<br/>Meloen met gerookte ham: <strong>' + reservation.menu.melon + '</strong>' : '' }
      ${ reservation.menu.troutNature ? '<br/>Forel natuur: <strong>' + reservation.menu.troutNature + '</strong>' : '' }
      ${ reservation.menu.troutAlmond ? '<br/>Forel met amandelen: <strong>' + reservation.menu.troutAlmond + '</strong>' : '' }
      ${ reservation.menu.troutWine ? '<br/>Forel in witte wijnsaus: <strong>' + reservation.menu.troutWine + '</strong>' : '' }
      ${ reservation.menu.troutArdennaise ? '<br/>Forel ardennaise: <strong>' + reservation.menu.troutArdennaise + '</strong>' : '' }
      ${ reservation.menu.volAuVent ? '<br/>Vol-au-vent: <strong>' + reservation.menu.volAuVent + '</strong>' : '' }
      ${ reservation.menu.volAuVentChild ? '<br/>Vol-au-vent kindermenu: <strong>' + reservation.menu.volAuVentChild + '</strong>' : '' }
    </div>
    <br/>
    Deze reservatie wijzigen kan via <a href="mailto:fanfaars@gmail.com?subject=Wijziging reservatie ${reservation.name}">fanfaars@gmail.com</a> (of door "allen beantwoorden" op deze mail).
    <br/><br/>
    Wij kijken er alvast naar uit om u te mogen ontvangen op ons Forellenfestijn!
    <br/><br/>
    Met muzikale groeten,
    <br/>Koninklijke Fanfare De Vrienden van 't Recht VZW Blaasveld
    <br/><br/><br/>
    <table style="color:gray; font-size: 0.65em; border: solid 1px gray;"><tr>
      <td>${reservation.name}</td>
      <td>${reservation.email}</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
      <td>${reservation.persons}</td>
      <td>${reservation.arrival}</td>
      <td>${reservation.menu.soup}</td>
      <td>${reservation.menu.melon}</td>
      <td>${reservation.menu.troutNature}</td>
      <td>${reservation.menu.troutAlmond}</td>
      <td>${reservation.menu.troutWine}</td>
      <td>${reservation.menu.troutArdennaise}</td>
      <td>${reservation.menu.volAuVent}</td>
      <td>${reservation.menu.volAuVentChild}</td>
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
