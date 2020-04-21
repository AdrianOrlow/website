FROM node:11-alpine

WORKDIR /workspace

COPY package.json yarn.lock /workspace/

RUN yarn install

COPY . .

RUN -e yarn build

CMD ["yarn", "start", "-p", "5000"]
