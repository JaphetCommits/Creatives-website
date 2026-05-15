const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  role:        { type: String, required: true },
  description: { type: String, default: '' },
  skills:      { type: [String], default: [] },
  imageUrl:    { type: String, default: null },
}, { timestamps: true })

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema)

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

let isConnected = false

async function connectDB() {
  if (isConnected) return
  await mongoose.connect(process.env.MONGO_URI)
  isConnected = true
}

async function seedIfEmpty() {
  const count = await Member.countDocuments()
  if (count === 0) {
    await Member.insertMany(defaultMembers)
  }
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  try {
    await connectDB()
    await seedIfEmpty()

    if (req.method === 'GET') {
      const members = await Member.find().sort({ createdAt: 1 })
      return res.json(members)
    }

    if (req.method === 'POST') {
      const { name, role, description, skills, imageUrl } = req.body
      if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
      const member = await Member.create({ name, role, description, skills, imageUrl })
      return res.status(201).json(member)
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
