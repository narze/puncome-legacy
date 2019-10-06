import express from 'express'
import Puncome from '../src/Puncome'

const app = express()
const port = 3000

app.get('/', (_, res) => res.send(`Input : ${input}\nOutput : ${output}`))

const input = 'ไดโนเสาร์ที่อยู่ในป่าคอนกรีต'
const output = Puncome.process(input)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
