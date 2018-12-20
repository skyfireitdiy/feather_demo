#!/bin/bash

mysql -h mysql_feather_demo -uroot -proot -e 'select 1 from feather.article' 2> /dev/null

if [ $? = 1 ]; then
    mysql -h mysql_feather_demo -uroot -proot -e 'create database feather default character set utf8mb4 default collate utf8mb4_unicode_ci' 2>/dev/null
    mysql -h mysql_feather_demo -uroot -proot feather < /tmp/data.sql 2>/dev/null
fi

/opt/feather_bin/feather