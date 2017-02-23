const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()

const PORT = process.env.PORT

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(session({secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  let list = (req.session.todo || []).filter(el => !el.done)
  res.render('index', { list: list })
})

app.get('/completed', (req, res) => {
  let list = (req.session.todo || []).filter(el => el.done)
  res.render('completed', { list: list })
})

app.post('/', (req, res) => {
  if (!req.session.todo) {
    req.session.todo = []
  }
  let task = req.body['task']
  let newTask = {
    id: req.session.todo.length,
    text: task,
    done: false
  }
  req.session.todo.push(newTask)
  res.render('index', {list: req.session.todo})
})

.post('/delete/:id', (req, res) => {
  deleteTask(req.session.todo, req.params.id)
  res.redirect('/')
})

.post('/mark-done/:id', (req, res) => {
  markTaskAsDone(req.session.todo, req.params.id)
  res.redirect('/')
})

app.listen(PORT || 3000)
console.log('listening to PORT ' + PORT)

function deleteTask (arr, id) {
  let index = arr.findIndex(el => el.id === Number.parseInt(id, 10))
  arr.splice(index, 1)
}

function markTaskAsDone (arr, id) {
  arr.find(el => el.id === Number.parseInt(id, 10)).done = true
}
