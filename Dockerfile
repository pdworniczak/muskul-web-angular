FROM node:10

WORKDIR /app
USER node

RUN yarn global add @angular/cli

EXPOSE 4200