# 의존성 설치 및 애플리케이션 빌드
FROM node:20-alpine as builder

# 작업 디렉토리
WORKDIR /app

# 패키지 파일 복사
COPY .yarn ./.yarn
COPY package.json yarn.lock .yarnrc.yml ./

# 의존성 설치
RUN yarn set version berry && yarn install

# 애플리케이션 소스 복사
COPY . ./

# 애플리케이션 빌드
RUN yarn build

# 실행 이미지
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["yarn","pm2-start"]