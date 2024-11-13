# Install dependencies only when needed
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed

FROM node:18-apline AS builder

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

# Production image, copy all the files and run the app

FROM node:18-apline AS runner

WORKDIR /app

ENV NODE_ENV Production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/pubilc ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_moudles ./node_modules

EXPOSE 3000

CMD ["yarn","start"]