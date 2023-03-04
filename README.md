# Fanfaars

## Todo
* Analytics
* Foto's selectie
* Forellenfestijn hero banner

## Serve
Create a `firebase-config.ts` in the `src/app` folder and export your Firebase config
as `firebaseConfig` .

```
npm start
```

## Functions
Create a `gmail-auth.ts` in the `functions/src` folder and export your Gmail authentication
(`user` and `pass`) as `gmailAuth`. 

> For the Gmail SMTP to work you must configure 2-factor authentication and use the generated key as pass.
> https://kinsta.com/knowledgebase/free-smtp-server/

Install the functions folder's dependencies
```
cd function && npm i && cd ..
```
Run the functions from the root directory
```
npm run functions
```
If you get a 401 error login to firebase
```
firebase login
```

## Deploy
```
npm run deploy
```

To only deploy the website without the functions run `npm run deploy:hosting`

## Docker deploy
Generate a login token from a web browser capable environment (not from the container)
```
firebase login:ci
```
Start the docker container binding the workspace to the /mnt folder
```
docker run -v "C:\devenv\mean\fanfaars":/mnt -i -t node:16 bash
```
Install the firebase tools
```
npm i -g firebase-tools
```
Deploy the server functions  
*Add the CI token at the end of every firebase command*
```
(cd mnt)
firebase deploy --only functions --token <token>
```
Build and deploy the website  
*Add the CI token at the end of every firebase command*
```
(cd mnt)
ng build --prod
firebase deploy --only hosting --token <token>
```
