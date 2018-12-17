# `feather Docker`环境搭建

以下操作均需要在`root`权限下进行，工作目录为此目录，并且需要连接网络。

## 首次配置

在当前目录下运行脚本`pre_run.sh`，此脚本会构建`feather_demo`镜像，并拉取`mysql`镜像。

```shell
./pre_run.sh
```

### 初始化`mysql`

* 在当前目录下建立目录`mysql_data`作为`mysql`容器的数据目录。

```shell
mkdir mysql_data
```

* 运行`mysql`容器

```shell
./start_mysql.sh
```

该脚本将当前目录下的`mysql_data`映射到容器`/var/lib/mysql`目录，作为`mysql`的数据目录，设置容器名称为`mysql_feather_demo`，并设置密码为`root`

* 查看容器`ip`地址

```shell
docker inspect mysql_feather_demo
```

此命令可以查看容器的一些信息，从中可以看到容器`ip`地址。（这里假设为`172.17.0.2`）

* 导入数据

使用本机的`mysql`客户端连接容器。

```shell
mysql -h172.17.0.2 -uroot -proot 
```

导入数据：

```sql
\. data.sql
```

到此，`mysql`数据库初始化完成。

### 配置项目

修改`runtime/cfg/feather.cfg`文件，将其中的数据库相关信息修改为实际数据。(此处假设端口号为`8080`)

### 运行`feather`示例

```shell
./start_feather.sh
```

使用`docker inspect feather_demo`查看`feather_demo`容器的`ip`地址（此处假设是`17.2.0.3`），在浏览器访问`http://172.17.0.3:8080/sign_out_page`注册并发表一篇文章。

## 后续使用

后续只需要运行

```shell
./start_mysql.sh
```

和

```shell
./start_feather
```

即可启动`feather`示例。

使用脚本`stop_mysql.sh`和`stop_feather.sh`分别停止`mysql`容器和`feather`容器。
