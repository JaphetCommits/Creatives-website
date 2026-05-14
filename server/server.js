const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Member = require('./models/Member')

const app = express()
app.use(cors())
app.use(express.json())

const dbURI = process.env.MONGO_URI
if (!dbURI) {
  console.error('MONGO_URI is not set')
  process.exit(1)
}
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

const defaultMembers = [
  { name: 'SHEEN LEE S. EDIS',        role: 'Founder' },
  { name: 'ARMANDO T. SAGUIN, MSIT',  role: 'Adviser' },
  { name: 'JUVELITO MARTINEZ',        role: 'Mentor' },
  { name: 'MARK MASCARDO',            role: 'Mentor' },
  { name: 'WHELSTER R. ESMADE',       role: 'Mentor' },
  { name: 'HENZON DIONSAY',           role: 'Mentor' },
  { name: 'JUNE A. JACINTO',          role: 'Mentor' },
  { name: 'ROBERT MAYO L. ELUMBA',    role: 'Mentor' },
  { name: 'GEHAN RESALUTE',           role: 'Mentor' },
  { name: 'MARKLAN A. HAMPAC',        role: 'Mentor' },
  { name: 'RALDIN C. DISOMIMBA',      role: 'Member / Mentor' },
  { name: 'STEFHANIE ANN V. BATUCAN', role: 'President' },
  { name: 'EJ A. VINCULADO',          role: 'Vice President' },
  { name: 'NESFHE NINA S. MAGSANAY',  role: 'Secretary' },
  { name: 'KATE NICOLE S. EDIS',      role: 'Asst. Secretary' },
  { name: 'MISCHI JEDA J. ELUMBA',    role: 'Treasurer' },
  { name: 'PETER ROBERT C. AYONO',    role: 'Auditor' },
  { name: 'KENZEN L. MINAO',          role: 'P.I.O' },
  { name: 'RENZ L. SANTIAGO',         role: 'Member' },
  { name: 'KEITH BRAIN B. LARANJO',   role: 'Member' },
  { name: 'JULLAN CARL J. MAGLINTE',  role: 'Member' },
  { name: 'JAPHET V. BASTILLADA',     role: 'Member' },
  { name: 'CRISTOPH B. BAGABUYO',     role: 'Member' },
  { name: 'CYD M. BALLON',            role: 'Member' },
  { name: 'MARC LESTER D. GUIDO',     role: 'Member' },
  { name: 'JUSTINE P. BUNCAG',        role: 'Member' },
]

async function seedIfEmpty() {
  const count = await Member.countDocuments()
  if (count === 0) {
    await Member.insertMany(defaultMembers)
    console.log('Seeded default members')
  }
}

mongoose.connection.once('open', seedIfEmpty)

app.get('/api/members', async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: 1 })
    res.json(members)
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch members' })
  }
})

app.post('/api/members', async (req, res) => {
  try {
    const { name, role, description, skills, imageUrl } = req.body
    if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
    const member = await Member.create({ name, role, description, skills, imageUrl })
    res.status(201).json(member)
  } catch (err) {
    res.status(500).json({ error: 'Failed to create member' })
  }
})

app.delete('/api/members/:id', async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id)
    if (!member) return res.status(404).json({ error: 'Member not found' })
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete member' })
  }
})

const PORT = process.env.SERVER_PORT || 3001
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on port ${PORT}`)
})
