FROM node:22-alpine AS builder

RUN apk add --no-cache build-base gcc

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . ./

RUN npm run build

# ETAPA 2: O "Garçom" (O Nginx)
FROM nginx:alpine

COPY --from=builder /src/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]