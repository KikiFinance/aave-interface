rm .env
ln -s .env.prd .env
npm run build
rm firebase.json
ln -s firebase-prd.json firebase.json
firebase use prod
firebase deploy --only hosting

