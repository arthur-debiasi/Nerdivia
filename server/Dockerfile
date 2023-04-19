# Usar a imagem node:16.14-alpine como base
FROM node:16.14-alpine

WORKDIR /server-backend

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "dev" ]
