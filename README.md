# cljs-processes

## Usage
## Options: clj -M -m figwheel.main --help

```bash
clojure -M -m figwheel.main -b dev -r

clojure -M -m figwheel.main -pc -b dev -r

clojure -M -m figwheel.main --compile waves.core --repl

clojure -M:build-dev
```

## Create release
## Must have webpack installed for build
### clojure -M -m figwheel.main --build-once dev
clojure -M:prod

## Copy content into site-content directory for nginx
cp -r target/public/ site-content/
cp resources/public/index.html site-content/

## Docker local testing
docker run -it --rm -d -p 8080:80 --name Waves -v ~/src/lisp-clojure/quil-sketches/waves/site-content:/usr/share/nginx/html nginx

## Local Docker build
### Make multi-architecture for both ARM and INTEL
docker build --platform linux/amd64,linux/arm64 -t nbrand/waves:1.0 .

# Inspect image. Try Skopeo as an alternative.
docker manifest inspect nbrand/waves:1.0 | grep architecture

## Test Docker build
docker run -it --rm -d -p 8080:8080 --name web nbrand/waves:1.0

## Deploy to Cloud Run
gcloud run deploy waves --image nbrand/waves:1.0 \
--region us-central1 --allow-unauthenticated

## Figwheel guide
https://figwheel.org/
