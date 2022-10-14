FROM node

WORKDIR workdir .
COPY package*.json ./
RUN npm install
RUN npm run build
COPY ./dist .
ENV PORT=3001
CMD [ "node", "main.js" ]