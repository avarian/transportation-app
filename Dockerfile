FROM node:18-alpine

WORKDIR /build

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "run", "dev"]