#!/bin/bash
cd /tmp
echo "Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
pacman -Syy
pacman -S git cmake make gcc boost libutil-linux mysql libpqxx sqlite zlib openssl --noconfirm
git clone http://github.com/qicosmos/feather
cd feather
sed -i 's/https/http/g' .gitmodules
git submodule update --init
mkdir build
cd build
cmake ..
make CXX_FLAGS+="-I/usr/include/mysql -std=c++17"
cd ..
