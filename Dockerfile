FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY site-content/ /usr/share/nginx/html

EXPOSE 8080

# The underlying NGINX image has an existing ENTRYPOINT/CMD
# CMD ["nginx", "-g", "daemon off;"]
