const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const distPath = path.join(__dirname, '../client/dist')
app.use(express.static(distPath))

let members = [
  { _id: '1',  name: 'SHEEN LEE S. EDIS',        role: 'Founder',         description: '', skills: [], imageUrl: null },
  { _id: '2',  name: 'ARMANDO T. SAGUIN, MSIT',  role: 'Adviser',         description: '', skills: [], imageUrl: null },
  { _id: '3',  name: 'JUVELITO MARTINEZ',        role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '4',  name: 'MARK MASCARDO',            role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '5',  name: 'WHELSTER R. ESMADE',       role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '6',  name: 'HENZON DIONSAY',           role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '7',  name: 'JUNE A. JACINTO',          role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '8',  name: 'ROBERT MAYO L. ELUMBA',    role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '9',  name: 'GEHAN RESALUTE',           role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '10', name: 'MARKLAN A. HAMPAC',        role: 'Mentor',          description: '', skills: [], imageUrl: null },
  { _id: '11', name: 'RALDIN C. DISOMIMBA',      role: 'Member / Mentor', description: '', skills: [], imageUrl: null },
  { _id: '12', name: 'STEFHANIE ANN V. BATUCAN', role: 'President',       description: '', skills: [], imageUrl: null },
  { _id: '13', name: 'EJ A. VINCULADO',          role: 'Vice President',  description: '', skills: [], imageUrl: null },
  { _id: '14', name: 'NESFHE NINA S. MAGSANAY',  role: 'Secretary',       description: '', skills: [], imageUrl: null },
  { _id: '15', name: 'KATE NICOLE S. EDIS',      role: 'Asst. Secretary', description: '', skills: [], imageUrl: null },
  { _id: '16', name: 'MISCHI JEDA J. ELUMBA',    role: 'Treasurer',       description: '', skills: [], imageUrl: null },
  { _id: '17', name: 'PETER ROBERT C. AYONO',    role: 'Auditor',         description: '', skills: [], imageUrl: null },
  { _id: '18', name: 'KENZEN L. MINAO',          role: 'P.I.O',           description: '', skills: [], imageUrl: null },
  { _id: '19', name: 'RENZ L. SANTIAGO',         role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '20', name: 'KEITH BRAIN B. LARANJO',   role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '21', name: 'JULLAN CARL J. MAGLINTE',  role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '22', name: 'JAPHET V. BASTILLADA',     role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '23', name: 'CRISTOPH B. BAGABUYO',     role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '24', name: 'CYD M. BALLON',            role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '25', name: 'MARC LESTER D. GUIDO',     role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '26', name: 'JUSTINE P. BUNCAG',        role: 'Member',          description: '', skills: [], imageUrl: null },
]

let nextId = members.length + 1

app.get('/api/members', (req, res) => {
  res.json(members)
})

app.post('/api/members', (req, res) => {
  const { name, role, description, skills, imageUrl } = req.body
  if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
  const member = {
    _id: String(nextId++),
    name,
    role,
    description: description || '',
    skills: skills || [],
    imageUrl: imageUrl || null,
  }
  members.push(member)
  res.status(201).json(member)
})

app.put('/api/members/:id', (req, res) => {
  const { name, role, description, skills, imageUrl } = req.body
  if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
  const index = members.findIndex(m => m._id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Member not found' })
  members[index] = { ...members[index], name, role, description: description || '', skills: skills || [], imageUrl: imageUrl || null }
  res.json(members[index])
})

app.delete('/api/members/:id', (req, res) => {
  const index = members.findIndex(m => m._id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Member not found' })
  members.splice(index, 1)
  res.json({ success: true })
})

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = process.env.SERVER_PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`)
})
