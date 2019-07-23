const { Pool } = require("pg");
const pool = new Pool({
  user: "apple",
  host: "localhost",
  database: "api",
  port: 5432
});
