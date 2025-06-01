rm .env
ln -s .env.test3 .env
npm run build
rm firebase.json
ln -s firebase-test3.json firebase.json
firebase use default
firebase deploy --only hosting

