FROM --platform=linux/amd64 node:lts-slim AS build

RUN mkdir -p /app
WORKDIR /app
COPY ./frontend /app
COPY ./.env /app
RUN npm install
RUN npm run build

FROM --platform=linux/amd64 node:lts-slim AS main
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["npm","run","start"]
