#Dockerizing spring boot application
#Base image openjdk version 8
FROM openjdk:latest

#To add the runnable jar file of the backend project to the container
ADD ./target/backend-docker.jar backend-docker.jar

ENV DBPORT 3306

#To specify the command that runs the jar files in the /bin/bash in the container
ENTRYPOINT ["java", "-DdatabasePort=${DBPORT}" ,"-jar", "/backend-docker.jar"]
