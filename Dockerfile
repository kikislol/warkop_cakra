FROM node:18.15-alpine3.17 AS base 

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /app
COPY ./package*.json pnpm-lock.yaml ./
ENV PATH /app/node_modules/.bin:$PATH
RUN pnpm install

FROM base AS build
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 3000

CMD ["pnpm","dev"]

# Commande to run 

# docker compose up -d --build
# docker compose down -f
# docker stop <name_of_container>
# docker ps or docker compose ps

