FROM node:14-slim AS build

ARG BASE_PATH=https://orlow.me
ARG DATABASE_URL

ENV BASE_PATH ${BASE_PATH}
ENV DATABASE_URL ${DATABASE_URL}

RUN apt-get update && apt-get install libglu1 libxi6 libgconf-2-4 libssl-dev ca-certificates -y

WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY prisma ./prisma/

RUN yarn install --frozen-lockfile
RUN yarn run prisma:generate

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]