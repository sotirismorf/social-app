const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "psql123",
  port: 5432,
  database: "librecom"
});

module.exports = pool;
