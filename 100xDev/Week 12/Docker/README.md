# docker

**Docker Registries** : a place where we can store or search for images
[Docker Hub](https://hub.docker.com/)

### common container commands
```bash
docker run -d --name <container_name> -p <host_port>:<container_port> <image_name>
docker run mongo    # run mongo container
```

`````bash
docker run -p 27017:27017 mongo # run mongo container and connect to port 27017 to host port 27017
dokcer run -d --name mongo -p 27017:27017 mongo # -d run in background
`````

```bash
docker ps # list all running containers
```

```bash
docker kill <container_id> # kill container
```

```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres # run postgres container
# -e set environment variable
```
```bash
docker exec -it <container_id> bash # run bash in container
docker exec -it <container_id> /bin/bash # run bash in container
```


```bash
docker pull <image_name> # pull image from docker hub
docker images # list all images
docker ps -a # list all containers
docker stop <container_id> # stop container
docker push <image_name> # push image to docker hub
```