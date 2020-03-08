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

> For the Gmail SMTP to work you must configure 2 factor authentication and use the generated key as pass.
> https://kinsta.com/knowledgebase/free-smtp-server/

Install the functions folder's dependencies
```
cd function && yarn && cd ..
```
Run the functions from the root directory
```
yarn functions
```
If you get a 401 error login to firebase
```
firebase login
```

> For locally testing the Firestore hook you can uncomment the http function and call that in stead.

## Deploy
```
yarn deploy
```
> On Windows it is not possible to deploy cloud functions to Firebase. 
> Hence you have to rename the `functions` folder to something else before deploying.

> Deploying functions has to be done from a Linux based machine.

From a fresh git clone on a Windows machine with Ubuntu bash:
```
yarn
cd functions && yarn && cd ..
firebase login
yarn deploy
```
