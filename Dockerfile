FROM base/archlinux
COPY install.sh /tmp/
RUN chmod +x /tmp/install.sh && /tmp/install.sh
WORKDIR /opt/feather_demo
CMD [ "/tmp/feather/build/feather" ]