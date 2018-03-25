FROM ubuntu
RUN apt-get update && apt-get install -y git curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs
RUN useradd -m dev
USER dev
RUN mkdir /home/dev/.ssh
EXPOSE 8080
WORKDIR /workspace
ENTRYPOINT /bin/bash
