   # develop stage
   FROM node:18.12.1-alpine as develop-stage
   
   RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

   WORKDIR /app

   # Copy the package.json and install dependencies
   COPY package*.json ./
   RUN yarn install

   # Copy rest of the files
   COPY . .

   # Build the project
   RUN yarn run build


   FROM nginx:alpine as production-build
   COPY ./nginx.conf /etc/nginx/nginx.conf

   ## Remove default nginx index page
   RUN rm -rf /usr/share/nginx/html/*

   # Copy from the stahg 1
   COPY --from=develop-stage /app/dist /usr/share/nginx/html

   EXPOSE 80
   # ENTRYPOINT ["nginx", "-g", "daemon off;"]