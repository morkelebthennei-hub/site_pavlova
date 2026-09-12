#!/usr/bin/env bash
# Разовый скрипт настройки чистого VPS (Ubuntu LTS) под ART.OHREY.
# Запускать один раз при покупке сервера, из-под пользователя с sudo:
#   scp deploy/vps-setup.sh user@server:~ && ssh user@server 'bash vps-setup.sh'
set -euo pipefail

APP_DIR="/opt/art-ohrey"
REPO_URL="https://github.com/morkelebthennei-hub/site_pavlova.git"

echo "== Обновление пакетов =="
sudo apt-get update -y
sudo apt-get upgrade -y

echo "== Docker =="
if ! command -v docker >/dev/null; then
  curl -fsSL https://get.docker.com | sudo sh
  sudo usermod -aG docker "$USER"
fi

echo "== Nginx + Certbot =="
sudo apt-get install -y nginx certbot python3-certbot-nginx

echo "== Клонирование репозитория в $APP_DIR =="
sudo mkdir -p "$APP_DIR"
sudo chown "$USER":"$USER" "$APP_DIR"
if [ ! -d "$APP_DIR/.git" ]; then
  git clone "$REPO_URL" "$APP_DIR"
fi

echo "== Nginx-конфиг =="
sudo cp "$APP_DIR/deploy/nginx.conf" /etc/nginx/sites-available/art-ohrey
sudo ln -sf /etc/nginx/sites-available/art-ohrey /etc/nginx/sites-enabled/art-ohrey
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

echo "== Готово =="
echo "Дальше вручную:"
echo "1. Направить DNS домена на IP этого сервера."
echo "2. sudo certbot --nginx -d art-ohrey.ru -d www.art-ohrey.ru"
echo "3. cd $APP_DIR/deploy && docker compose up -d --build"
echo "4. Добавить в секреты GitHub-репозитория: SSH_HOST, SSH_USER, SSH_PRIVATE_KEY (см. .github/workflows/deploy.yml)"
