rm .env
ln -s .env.test3 .env
yarn build:static 
rm firebase.json
ln -s firebase-test3.json firebase.json
firebase use default
firebase deploy --only hosting

