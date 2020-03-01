# Fanfaars

## Todo
* Menu animation
* Analytics
* Foto's filter
* Forellenfestijn hero banner
* F4F op zoek naar muzikanten
* Over ons info uitbreiden

## Serve
Create a `firebase-config.ts` in the `src/app` folder and export your Firebase config
as `firebaseConfig` .

```
yarn start
```

## Functions
Create a `gmail-auth.ts` in the `functions/src` folder and export your Gmail authentication
(`user` and `pass`) as `gmailAuth`. 

> For the Gmail SMTP to work you must configure your Gmail account to accept access from
> less secure apps (https://myaccount.google.com/lesssecureapps)

```
yarn functions
```

> For locally testing the Firestore hook you can uncomment the http function and call that in stead.

## Deploy
```
yarn deploy
```
> On Windows it is not possible to deploy cloud functions to Firebase. 
> Hence you have to rename the `functions` folder to something else before deploying.

> Deploying functions has to be done from a Linux based machine.
