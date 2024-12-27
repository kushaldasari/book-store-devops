FROM node:21

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install
# If you are building your code for production
# RUN yarn install --production

# Bundle app source
COPY . /app

EXPOSE 5173
CMD [ "npm", "run", "dev" ]