FROM node:11-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN yarn build

CMD ["yarn", "start", "-p", "5000"]
