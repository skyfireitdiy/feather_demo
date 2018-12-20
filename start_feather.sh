#!/bin/bash

if [ `id -u` -ne 0 ]; then
    echo "Please run as root"
    exit -1
fi

./stop_feather.sh 2>&1 /dev/null
docker run -v "$PWD/mysql_data":/var/lib/mysql --name mysql_feather_demo -e MYSQL_ROOT_PASSWORD=root -d mariadb --default-authentication-plugin=mysql_native_password
echo Waiting for mysql to start ...
sleep 10
docker run -v "$PWD/runtime":/opt/feather_demo --link mysql_feather_demo -p 8080:8080  --name feather_demo -d wmb521/feather_demo:v1
echo -e "\n\nPlease try to visit http://localhost:8080/sign_out_page"
