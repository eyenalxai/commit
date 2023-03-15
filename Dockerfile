FROM node AS installer
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
WORKDIR /app
COPY .yarn ./.yarn/
COPY .yarnrc.yml yarn.lock package.json next.config.js ./
RUN yarn install


FROM node AS builder
WORKDIR /app
COPY . .
COPY --from=installer /app/node_modules ./node_modules
RUN yarn build


FROM node AS runner
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/yarn.lock ./yarn.lock

EXPOSE 3000

CMD ["yarn", "start"]