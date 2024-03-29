FROM node:18 as builder

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

FROM nginx:1.21

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]