# `feather Docker`环境搭建

以下操作均需要在`root`权限下进行，工作目录为此目录，并且需要连接网络。

## 准备工作

安装并启动`docker`服务。

`Ubuntu`:

```shell
apt install docker.io
```

`archlinux`：

```shell
pacman -S docker
systemctl start docker
```

其他操作系统请自行阅读相关文档完成`docker`服务的安装与启动。

## 启动`feather`

```shell
./start_feather.sh
```

首次运行会下载`200`余`MB`的镜像。

启动后访问[http://localhost:8080/sign_out_page](http://localhost:8080/sign_out_page)验证启动结果。

## 停止`feather`

```shell
./stop_feather.sh
```
