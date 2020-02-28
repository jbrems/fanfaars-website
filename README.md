# Fanfaars

## Todo
* Forellenfestijn link/pagina
* Menu animation
* Analytics
* Lazy loading

## Serve
Create a `firebase-config.ts` in the `src/app` folder and export your Firebase config
as `firebaseConfig` .

```
yarn start
```

## Deploy
```
yarn deploy
```
> On Windows it is not possible to deploy cloud functions to Firebase. 
> Hence you have to rename the `functions` folder to something else before deploying.

> Deploying functions has to be done from a Linux based machine.
