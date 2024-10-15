FROM node:22-alpine

WORKDIR /app

# 依存パッケージをコピーしてインストール
COPY package.json package-lock.json ./
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# アプリケーションを起動
CMD ["npm", "start"]

