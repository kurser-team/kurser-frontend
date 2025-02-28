FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN yarn build
CMD yarn start
