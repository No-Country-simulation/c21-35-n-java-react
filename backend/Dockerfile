# Use OpenJDK 17 for the build stage (make sure to match your local version)
FROM openjdk:17-jdk

# Set the working directory
WORKDIR /app

# Copy all files from the backend folder
COPY backend/ .

# Ensure Maven wrapper has execute permissions
RUN chmod +x ./mvnw

# Run Maven wrapper to build the project
RUN ./mvnw clean package -DskipTests

# Expose the port that the Spring Boot app will run on
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]