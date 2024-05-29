//to start
yarn dev

//to initialize
yarn init

//add typescript as dev dependencies
yarn add typescript -D

//add express
yarn add express

//create empty typescript repo
npx tsc --init

//add types
yarn add @types/express -D

//to compile source code
yarn add tsc-watch -D

//add grapghql
yarn add graphql

//docker 
docker compose up 

//run docker to background
docker compose up -d 

//add primsa
yarn add prisma typescript ts-node @types/node -D

//setupe empty prisma
npx prisma init

//create sql table to prisma model 
npx prisma migrate dev --name create_users_table

//for change prisma created schema primsa 
npx prisma migrate dev --name make_profile_image_optional