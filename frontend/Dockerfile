# build stage
FROM node:lts-alpine as build-stage
WORKDIR /home/frontend
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25 as production-stage
COPY --from=build-stage /home/frontend/dist/ /usr/share/nginx/html/
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]