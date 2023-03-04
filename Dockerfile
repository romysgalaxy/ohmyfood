FROM node:18-alpine3.15
RUN apk --no-cache add --virtual .builds-deps build-base python3
# Create app directory
WORKDIR /app
# Install app dependencies
COPY . .
