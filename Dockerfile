FROM nginx

RUN rm /usr/share/nginx/html/index.html
COPY resources/public /usr/share/nginx/html/
