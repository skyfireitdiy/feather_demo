#!/bin/bash
cd /tmp
echo "Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/\$repo/os/\$arch" > /etc/pacman.d/mirrorlist
echo "[archlinuxcn]" >> /etc/pacman.conf
echo "SigLevel=Never" >> /etc/pacman.conf
echo "Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/\$arch" >> /etc/pacman.conf
pacman -Syyv
pacman -Sv git cmake make gcc boost libmysqlclient mysql-clients --noconfirm
git clone http://github.com/qicosmos/feather
cd feather
sed -i 's/https/http/g' .gitmodules
git submodule update --init
mkdir build
cd build
cmake ..
make CXX_FLAGS+="-I/usr/include/mysql -std=c++17"
pacman -Rnsuv git cmake make gcc libmysqlclient --noconfirm
pacman -Sccv --noconfirm
mkdir /opt/feather_bin
cp feather /opt/feather_bin/
cd /opt/feather_bin/
rm -rvf /tmp/feather
