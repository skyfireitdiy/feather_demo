#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

set -e
docker pull base/archlinux --registry-mirror=https://docker.mirrors.ustc.edu.cn
docker build -t feather_demo .
docker pull mysql --registry-mirror=https://docker.mirrors.ustc.edu.cn
