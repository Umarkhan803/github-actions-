# build stage base image
FROM node:22-alpine
# creating the working directory
WORKDIR /app

# copying the package.json and package-lock.json files to the working directory

COPY . .

# installing the dependencies
RUN npm install

# building the Vite project
RUN npm run build

# exposing the port
EXPOSE 3000
# serving the built app on port 3000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]