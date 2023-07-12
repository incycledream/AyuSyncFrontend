yarn build
docker build -f ./Dockerfile -t gitea.radolyn.com/ayugram/ayugram-frontend:latest .
docker push gitea.radolyn.com/ayugram/ayugram-frontend:latest
