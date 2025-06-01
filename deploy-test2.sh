rm .env
ln -s .env.test2 .env
yarn build
rm firebase.json
ln -s firebase-test2.json firebase.json
firebase use default
firebase deploy --only hosting

