FROM circleci/node:8.11.1
COPY . /code
WORKDIR /code

EXPOSE 8080

RUN yarn

ENTRYPOINT yarn start
