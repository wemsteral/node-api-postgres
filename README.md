To satisfy my curiosity, I created an API in Express to communicate with a simple database (id, user, email) set up with Postgres.

This is written in ES6.

1. Create database from terminal using postgres.
2. Create a 'id / user / email' table.
3. Run `npm init -y` in new project directory.
4. Run `npm i express pg` to set up an express.js project with exisiting postgres modules.
5. Create 'index.js' in root of project.
6. Set up '/' route and listener in index.js.
7. Assign queries and type of http request to js functions in 'queries.js'.
8. Export them.
9. Import them in index.js and assign functions to url/query.
