# Use Maven in the build stage
FROM maven:3.9.9-openjdk-19 AS build
WORKDIR /app

# Copy files
COPY backend/pom.xml .
COPY backend/src src

# Build the project
RUN mvn clean package -DskipTests

# Use JDK 19 for the runtime stage
FROM openjdk:19-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
