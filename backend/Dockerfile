# Base image with OpenJDK 17 (or version that matches your local setup)
FROM openjdk:17-jdk

# Set the working directory
WORKDIR /app

# Copy all files from the backend folder
COPY backend/ .

# Run Maven wrapper to build the project
RUN ./mvnw clean package -DskipTests

# Expose the port that the Spring Boot app will run on
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]
