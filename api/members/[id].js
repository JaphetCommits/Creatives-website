const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  role:        { type: String, required: true },
  description: { type: String, default: '' },
  skills:      { type: [String], default: [] },
  imageUrl:    { type: String, default: null },
}, { timestamps: true })

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema)

let isConnected = false

async function connectDB() {
  if (isConnected) return
  await mongoose.connect(process.env.MONGO_URI)
  isConnected = true
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const { id } = req.query

  try {
    await connectDB()

    if (req.method === 'PUT') {
      const { name, role, description, skills, imageUrl } = req.body
      if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
      const member = await Member.findByIdAndUpdate(
        id,
        { name, role, description, skills, imageUrl },
        { new: true }
      )
      if (!member) return res.status(404).json({ error: 'Member not found' })
      return res.json(member)
    }

    if (req.method === 'DELETE') {
      const member = await Member.findByIdAndDelete(id)
      if (!member) return res.status(404).json({ error: 'Member not found' })
      return res.json({ success: true })
    }

    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}
