FROM node:18-alpine

WORKDIR /src/app/

COPY . .

RUN npm install --omit=dev

RUN npm run build

EXPOSE 3000

ENV ENV=production
ENV NODE_ENV=production
ENV REACT_APP_ABLY_API_KEY=_GMLlA.b-9ZLg:ZbDw5Zngwe9A0RJLppAOR7PM3SEIE1d-KDjClTE9oLU
ENV REACT_APP_HOST=0.0.0.0
ENV REACT_APP_PORT=3000
ENV REACT_APP_ESLINT_NO_DEV_ERRORS=true

# ENV HOST=0.0.0.0

CMD ["npm", "run", "start"]
# CMD ["yarn", "run", "build"]
# CMD ["npx", "serve", "-s", "build"]