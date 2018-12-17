#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

docker stop feather_demo
docker rm feather_demo