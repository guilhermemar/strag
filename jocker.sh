#!/bin/bash

name="strag-development"

if [[ `docker images -q ${name}` == "" ]]
then
    docker build -t $name .
fi

if [[ `docker ps -q -a -f "name=${name}"` == "" ]]
then
    docker run -it -p 8080:8080 --name $name --volume $(pwd):/workspace -d $name /bin/bash

    docker cp ~/.gitconfig $name:/home/dev/.gitconfig
    docker cp ~/.ssh/id_rsa $name:/home/dev/.ssh/id_rsa

    docker stop $name
fi

docker start -i $name
