#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

./stop_mysql.sh
docker run -v "$PWD/mysql_data":/var/lib/mysql --name mysql_feather_demo -e MYSQL_ROOT_PASSWORD=root -d mysql --default-authentication-plugin=mysql_native_password
