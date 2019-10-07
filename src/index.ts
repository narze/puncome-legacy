import express from 'express'
import Puncome from '../src/Puncome'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const input = req.query.input || ''
  const output = Puncome.process(input)

  res.send(`Input : ${input} <br> Output : ${output} <br> <form action="/"><input type="text" name="input" /><button type="submit">Submit</button></form>`)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
