FROM node:16

# Copy application files
WORKDIR /usr/src/app
COPY . .

# Install dependencies
RUN npm install
#RUN apk add --no-cache curl
# Start the application
CMD ["npm", "start"]
