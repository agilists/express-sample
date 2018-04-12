FROM circleci/node:8.11.1
COPY . /code
WORKDIR /code

USER root
RUN chown -R circleci:circleci /code

USER circleci

EXPOSE 8080

RUN yarn

ENTRYPOINT yarn start
