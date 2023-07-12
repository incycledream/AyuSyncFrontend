FROM node:18-alpine

RUN apk update && apk upgrade

WORKDIR /app
COPY .output /app/.output

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NUXT_APP_BASE_URL=/ui/

ENTRYPOINT [ "node", "/app/.output/server/index.mjs" ]
