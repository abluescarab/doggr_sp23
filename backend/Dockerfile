# build: docker build -t backend/latest .
# run: docker run --name backend backend/latest

FROM node:18

RUN npm install -g pnpm

WORKDIR /app
COPY package.json .
COPY pnpm-lock.yaml .

RUN pnpm install

COPY . .
EXPOSE 8080
ENV ADDRESS=0.0.0.0 PORT=8080 DB_HOST=postgres DB_PORT=5432 DB_NAME=doggr DB_USER=doggr DB_PASS=doggr ADMIN_PASS=1997

RUN pnpm build

# We cannot do {RUN pnpm db:reset} here because docker will not connect to the network at build time
#RUN pnpm db:reset

CMD ["pnpm", "start:prod"]
