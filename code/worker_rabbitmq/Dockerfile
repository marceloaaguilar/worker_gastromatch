
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

# Expõe a porta, se necessário (geralmente worker não precisa)
# EXPOSE 8080

CMD ["node", "index.js"]
