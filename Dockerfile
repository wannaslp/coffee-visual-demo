FROM node:24-trixie-slim
RUN apt-get update && apt-get install -y --no-install-recommends fonts-liberation libnss3 libatk1.0-0t64 libatk-bridge2.0-0t64 libx11-6 libxcomposite1 libxdamage1 libxfixes3 libxrandr2 libgbm1 libasound2t64 && rm -rf /var/lib/apt/lists/*
WORKDIR /demo
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "test"]
