# syntax=docker/dockerfile:1
FROM node:15.14
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
COPY src ./src

FROM node:15.14-alpine
RUN apk --no-cache add ca-certificates
WORKDIR /app/
COPY --from=0 /app .
CMD ["node", "src"]  
