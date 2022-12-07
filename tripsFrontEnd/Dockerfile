#Building images on 2 stages

#stage 1: Copying the project into the contaier
#Base image from node images
FROM node:18.12.1-alpine AS build

WORKDIR /app

#Copy all files from host to the container
COPY package.json package-lock.json ./
COPY . .

#To install node modules
RUN npm install
RUN npm install -g @angular/cli

#To build the angular project based of node
RUN ng build --configuration production --output-path=/dist

#Stage 2: Deploying project on ng server
#Base image from nginx
FROM nginx:1.17.1-alpine

#Copy the output of the project run into the nginx container to deploy it
COPY --from=build /dist /usr/share/nginx/html

#To take the nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

#Environment variable to expose
ENV PORT 4200

#Expose the port variable
EXPOSE ${PORT}
