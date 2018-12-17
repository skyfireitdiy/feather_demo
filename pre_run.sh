#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

set -e
docker build -t feather_demo .
docker pull mysql
