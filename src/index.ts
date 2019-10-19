import express from 'express'
import Puncome from '../src/Puncome'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const input = req.query.input || ''
  const output = Puncome.process(input)

  res.render("index", { input, output })
})

app.set("view engine", "ejs");

app.set("views", "./public");

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
