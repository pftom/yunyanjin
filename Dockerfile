FROM nginx:1.13

# Remove default config of nginx
RUN rm /etc/nginx/conf.d/default.conf

COPY config/* /etc/nginx/conf.d/

COPY build /client

VOLUME [ "/etc/nginx/conf.d" ]