FROM node:18

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]