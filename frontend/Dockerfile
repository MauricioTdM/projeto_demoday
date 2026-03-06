FROM node:22-alpine AS builder

RUN apk add --no-cache build-base gcc

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . ./

# Abre a porta para receber a variável e injeta no ambiente do build
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ETAPA 2: O "Garçom" (O Nginx)
FROM nginx:alpine

COPY --from=builder /src/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]