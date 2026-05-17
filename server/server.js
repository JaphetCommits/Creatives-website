const express = require('express')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors())
app.use(express.json())

const distPath = path.join(__dirname, '../client/dist')
app.use(express.static(distPath))

const dataFile = path.join(__dirname, 'data/members.json')

function loadMembers() {
  return JSON.parse(fs.readFileSync(dataFile, 'utf8'))
}

function saveMembers(members) {
  fs.writeFileSync(dataFile, JSON.stringify(members, null, 2))
}

function nextId(members) {
  const max = members.reduce((m, x) => Math.max(m, Number(x._id) || 0), 0)
  return String(max + 1)
}

app.get('/api/members', (req, res) => {
  res.json(loadMembers())
})

app.post('/api/members', (req, res) => {
  const { name, role, description, skills, imageUrl, portfolio } = req.body
  if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
  const members = loadMembers()
  const member = {
    _id: nextId(members),
    name,
    role,
    description: description || '',
    skills: skills || [],
    imageUrl: imageUrl || null,
    portfolio: portfolio || null,
  }
  members.push(member)
  saveMembers(members)
  res.status(201).json(member)
})

app.put('/api/members/:id', (req, res) => {
  const { name, role, description, skills, imageUrl, portfolio } = req.body
  if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
  const members = loadMembers()
  const index = members.findIndex(m => m._id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Member not found' })
  members[index] = { ...members[index], name, role, description: description || '', skills: skills || [], imageUrl: imageUrl || null, portfolio: portfolio || null }
  saveMembers(members)
  res.json(members[index])
})

app.delete('/api/members/:id', (req, res) => {
  const members = loadMembers()
  const index = members.findIndex(m => m._id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Member not found' })
  members.splice(index, 1)
  saveMembers(members)
  res.json({ success: true })
})

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = process.env.SERVER_PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`)
})
