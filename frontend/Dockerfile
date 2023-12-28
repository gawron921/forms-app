FROM node:18.16.0-alpine3.17 as builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:1.23.3-alpine as frontend-form
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/src/infrastructure/src/views/vue-ui/dist /usr/share/nginx/html