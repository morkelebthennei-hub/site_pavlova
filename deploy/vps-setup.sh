#!/usr/bin/env bash
# Разовый скрипт настройки чистого VPS (Ubuntu LTS) под ART.OHREY.
# Запускать один раз при покупке сервера, из-под пользователя с sudo (или root):
#   scp deploy/vps-setup.sh user@server:~ && ssh user@server 'bash vps-setup.sh'
set -euo pipefail

APP_DIR="/opt/art-ohrey"
REPO_URL="https://github.com/morkelebthennei-hub/site_pavlova.git"

echo "== Обновление пакетов =="
sudo apt-get update -y
sudo apt-get upgrade -y

echo "== Swap =="
# У сервера мало RAM (~1 ГБ) — добавляем 2 ГБ подкачки для страховки.
if [ ! -f /swapfile ]; then
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo "/swapfile none swap sw 0 0" | sudo tee -a /etc/fstab
fi

echo "== Docker =="
if ! command -v docker >/dev/null; then
  curl -fsSL https://get.docker.com | sudo sh
  sudo usermod -aG docker "$USER" || true
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
echo "1. Направить DNS домена на IP этого сервера (A-запись art-ohrey.art и www.art-ohrey.art)."
echo "2. sudo certbot --nginx -d art-ohrey.art -d www.art-ohrey.art"
echo "3. cd $APP_DIR/deploy && docker compose pull && docker compose up -d"
echo "   (образ собирается в GitHub Actions и публикуется в ghcr.io — на сервере ничего не собираем)"
echo "4. Добавить в секреты GitHub-репозитория: SSH_HOST, SSH_USER, SSH_PRIVATE_KEY (см. .github/workflows/deploy.yml)"
