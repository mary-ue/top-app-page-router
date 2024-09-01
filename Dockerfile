FROM node:18.17.0
WORKDIR /opt/app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы
COPY . .

# Устанавливаем переменную окружения
ENV NODE_ENV=production

# Создаем билд
RUN npm run build

# Открываем порт
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

