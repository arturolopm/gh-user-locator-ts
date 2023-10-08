## Github user locator

This project can be run with Docker or manually.

**Docker**

To run the project with Docker, simply run the following command:

`docker-compose up`

This will start all of the necessary services, including the client and server.

**Manually**

To run the project manually, follow these steps:

1. Go to the client folder and run `npm i` to install the dependencies.
2. Run `npm run dev` to start the client development server.
3. Go to the server folder and run `npm i` to install the dependencies.
4. Compile the TypeScript code by running `tsc`.
5. Start the server by running `npm start`.

Once the server is running, you can open the client in a web browser at
[http://localhost:5173](http://localhost:5173), and the server will run on
[http://localhost:8080](http://localhost:8080).

**Tips**

- If you are making changes to the client code, you will need to restart the
  client development server by running `npm run dev` again.
- If you are making changes to the server code, you will need to compile the
  TypeScript code again by running `tsc` and then restart the server by running
  `npm start`.

**Troubleshooting**

If you are having trouble running the project, please check the following:

- Make sure that you have Docker installed and running.
- Make sure that you are in the project directory when you run the
  `docker-compose up` command.
- Make sure that you have installed the dependencies for the client and server
  by running `npm i` in the respective folders.
- Make sure that you have compiled the TypeScript code by running `tsc` in the
  server folder.

If you are still having trouble, please post a question on the project's GitHub
page.
