FROM node

WORKDIR workdir .
COPY package*.json ./
RUN npm install
COPY ./dist .
CMD [ "node", "main.js" ]