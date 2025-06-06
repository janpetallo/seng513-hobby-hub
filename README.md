# seng513-202401-group-19


## Dependencies
The following packages and dependencies are being used:
1. Vite
2. React BootStrap
3. React Router Dom
4. sass/scss
5. react-responsive
6. Express
7. dotenv
8. mongoose
9. nodemon
10. Docker
11. formik
12. yup
13. JsonWebToken
14. Cookie-parser
13. react-icons
14. libphonenumber-js
15. react-phone-input-2

## Getting started (running with Docker)
<u>Database Seeding Scripts:</u>
- To populate the MongoDB Database with seed data, refer to the instructions in the README.md file in the DBSeedingScripts 
directory. `project root directory/api/DBSeedingScripts`


<u>Server (api) side:</u>
1. From the root directory `cd api`
2. within the api directory create a file called .env (You will only have to make this .env file once).
3. Inside this file you will write `MONGO = <Mogo DB connection URL> (Replace the <> with the connection settings from Mongodb)`

`JWT = <replace with webstoken password>`

<u>Root Directory:</u>
1. From the root directory create a file called .env (You will only have to make this .env file once).
2. Inside this file you will write `MONGO = \<Mogo DB connection URL\> (Replace the <> with the connection settings from Mongodb).`

   `JWT = <replace with webstoken password>`

<u>Startup Instructions:</u>

Before any startup you must have and start the docker engine on your computer, this is most commonly tied to starting up the docker
desktop application.

1. cd into the root directory of the project
2. For the first startup (after pulling the project from GIT) enter: `docker-compose up --build` to build the project and start it with docker
3. Afterwards you may enter: `docker-compose up` to start the project with docker
4. To stop the project you may enter: `docker-compose down` or `ctrl + c`
5. Then on an internet browser go to:  http://localhost:5173/ to access the front end

## Alternative Methods to Starting without Docker

<u>Client side:</u>

1. From the root directory `cd client`
2. npm install
3. npm run dev
4. Go to the login page if the login button is not purple then the custom bootstrap colors are not working run the
   command:

   `npm add -D sass`

<u>Server (api) side:</u>
1. From the root directory `cd api`
2.  within the api directory create a file called .env (You will only have to make this .env file once).
3. Inside this file you will write MOGOG = \<Mogo DB connection URL\> (Replace the <> with the connection settings from Mongodb)
4. npm install
5. npm start

<u>Root Directory:</u>
1. From the root directory create a file called .env (You will only have to make this .env file once).
2. Inside this file you will write MONGO = \<Mogo DB connection URL\> (Replace the <> with the connection settings from Mongodb).



## Customizing Bootstrap 
1. I have created a custom theme and changed the font family to Roboto. If you want to change any of bootstraps
   defaults you can. Under the sass folder there is file called main.scss. This is where you edit Bootstraps default settings.
   Change this with caution as if you change global settings and someone else is using the same component theirs will change too.
2. Note: that our theme is called HHPurple (short for HobbyHub Purple) and can be used like any other bootstrap utility
```
<Button className="btn-lg mb-2 w-75" variant="HHPurple" type="submit">
   Login
</Button>
```

## Sources:
1) MongoDB manual (for db useage instructions): https://www.mongodb.com/docs/manual/
2) Mongoose api documentation (for mongoose mongodb functions): https://mongoosejs.com/docs/guide.html
3) Lamadev (for lessons on backend creation): https://www.youtube.com/watch?v=csUM7yfiaMw&list=PLPj8a3iD-ToscwX1f6XOr7nrriXH4Q8OV&index=3&t=2917s
