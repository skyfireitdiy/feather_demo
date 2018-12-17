#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

./stop_feather.sh
docker run -v "$PWD/runtime":/opt/feather_demo --link mysql_feather_demo --name feather_demo -d feather_demo