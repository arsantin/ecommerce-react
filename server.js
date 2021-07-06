const express = require('express')
const next = require('next')
const mysql = require("mysql");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()



app.prepare().then(() => {
  const server = express()

  const pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "",
    database: "ecommerce",
  });
  
  app.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`conectado como ${connection.threadId}`);
  
      connection.query("SELECT * FROM produtos", (err, rows) => {
        connection.release();
        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
      });
    });
  });
  
  app.get("/:id", (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`conectado como ${connection.threadId}`);
  
      connection.query(
        "SELECT * FROM produtos WHERE id = ?",
        [req.params.id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.send(rows);
          } else {
            console.log(err);
          }
        }
      );
    });
  });
  
  app.delete("/:id", (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`conectado como ${connection.threadId}`);
  
      connection.query(
        "DELETE FROM produtos WHERE id = ?",
        [req.params.id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.send(`Produto ${[req.params.id]} foi removido.`);
          } else {
            console.log(err);
          }
        }
      );
    });
  });
  
  app.post("", (req, res) => {
    console.log(req.body);
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`conectado como ${connection.threadId}`);
      connection.query("INSERT INTO produtos SET ?", req.body, (err, rows) => {
        connection.release();
        if (!err) {
          res.send(`Produto foi adicionado.`);
        } else {
          console.log(err);
        }
      });
    });
  });
  
  app.put("", (req, res) => {
    console.log(req.body);
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`conectado como ${connection.threadId}`);
  
      const { id, nome, categorias, descricao, image } = req.body;
  
      connection.query(
        "UPDATE produtos SET nome = ?, descricao = ?, categorias = ?, image = ? WHERE id = ?",
        [nome, descricao, categorias, image, id],
        (err, rows) => {
          connection.release();
          if (!err) {
            res.send(`Produto ${nome} foi alterado.`);
          } else {
            console.log(err);
          }
        }
      );
    });
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})