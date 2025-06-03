rm .env
ln -s .env.prd .env
yarn build:static 
rm firebase.json
ln -s firebase-prd.json firebase.json
firebase use prod
firebase hosting:channel:deploy preview


