# Use OpenJDK 19 for the build stage
FROM openjdk:19-jdk AS build
WORKDIR /app

# Copy files from the backend directory
COPY backend/pom.xml .
COPY backend/src src
COPY backend/mvnw .
COPY backend/.mvn .mvn

# Set execution permission for the Maven wrapper
RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

# Stage 2: Create the final Docker image using OpenJDK 19
FROM openjdk:19-jdk
VOLUME /tmp

# Copy the JAR from the build stage
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
EXPOSE 8080
