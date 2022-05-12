FROM node:14-slim AS build

ARG BASE_PATH=https://orlow.me

ENV BASE_PATH ${BASE_PATH}

RUN apt-get update && apt-get install -y libglu1 libxi6 libgconf-2-4

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]