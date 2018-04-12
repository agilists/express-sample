FROM circleci/node:8.11.1
COPY . /home/circleci/code
WORKDIR /home/circleci/code

EXPOSE 8080

RUN yarn

ENTRYPOINT yarn start
