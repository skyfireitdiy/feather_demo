#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

docker stop mysql_feather_demo
docker rm mysql_feather_demo