FROM node:18

WORKDIR /src/app/

COPY . .

RUN npm install --production

RUN npm run build

EXPOSE 3000

ENV ENV=production
ENV NODE_ENV=production
ENV REACT_APP_ABLY_API_KEY=_GMLlA.b-9ZLg:ZbDw5Zngwe9A0RJLppAOR7PM3SEIE1d-KDjClTE9oLU

CMD ["npm", "run", "deploy"]
# CMD ["yarn", "run", "build"]
# CMD ["npx", "serve", "-s", "build"]