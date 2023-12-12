FROM node:18

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

RUN npm install

RUN npm run build

EXPOSE 3000

ENV REACT_APP_ABLY_API_KEY=_GMLlA.b-9ZLg:ZbDw5Zngwe9A0RJLppAOR7PM3SEIE1d-KDjClTE9oLU

CMD ["npm", "run", "dev"]
# CMD ["yarn", "run", "build"]
# CMD ["npx", "serve", "-s", "build"]