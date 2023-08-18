# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json /app/

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code into the container at /app
COPY . /app/

# Start the app
CMD ["npm", "start"]