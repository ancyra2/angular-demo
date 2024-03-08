#Node 18.19.1 LTS
FROM node:18.19.1

RUN npm install -g @angular/cli@16
# Çalışma dizinini belirtelim
WORKDIR /usr/local/app

# Bağımlılıkları kopyalayalım ve yükleyelim
COPY package*.json ./

RUN npm install

# Uygulamayı kopyalayalım
COPY . .

CMD [ "ng", "serve", "--host", "0.0.0.0" ]
