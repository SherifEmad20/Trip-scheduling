FROM openjdk:18

COPY tripsBackend.jar tripsBackend.jar

ENV DBPORT="host.docker.internal:3307"


ENTRYPOINT [ "java","-Ddb_port=${DBPORT}","-jar", "/tripsBackend.jar"]

