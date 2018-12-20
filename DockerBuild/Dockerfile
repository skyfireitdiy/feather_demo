FROM archlinux/base
COPY install.sh /tmp/
COPY data.sql /tmp/
COPY entrypoint.sh /tmp/
RUN chmod +x /tmp/*.sh && /tmp/install.sh
WORKDIR /opt/feather_demo
CMD [ "/tmp/entrypoint.sh" ]