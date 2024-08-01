# develop stage
FROM node:lts-alpine AS build-stage

RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community

WORKDIR /app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN yarn install

# Copy rest of the files
COPY . .

# Build the project
RUN yarn build

FROM nginx:alpine AS production-stage

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
# Start Nginx to serve the application
CMD ["nginx", "-g", "daemon off;"]