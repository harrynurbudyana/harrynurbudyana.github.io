FROM node:18

RUN npm install

RUN npm run build

RUN npm run start