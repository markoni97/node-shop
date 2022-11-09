FROM node:alpine

RUN mkdir -p /tech-shop
WORKDIR /home/tech-shop

COPY ["package.json", "package-lock.json", "/home/tech-shop/"]
RUN npm install

COPY . /home/tech-shop
CMD ["npm", "start"]
