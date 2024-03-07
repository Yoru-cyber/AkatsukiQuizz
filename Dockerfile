FROM gradle:8.6.0-jdk8 AS build
COPY build.gradle.kts .
COPY gradle.properties .
COPY src ./src

RUN gradle installDist

FROM eclipse-temurin:21-jdk
EXPOSE 8080:8080
RUN mkdir /app
COPY --from=build /home/gradle/build/install/gradle /app/
WORKDIR /app/bin
ENTRYPOINT ["./gradle"]