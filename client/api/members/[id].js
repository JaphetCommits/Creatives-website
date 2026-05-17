import members from './index.js'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  const { id } = req.query

  if (req.method === 'PUT') {
    const { name, role, description, skills, imageUrl } = req.body
    if (!name || !role) return res.status(400).json({ error: 'Name and role are required' })
    const index = members.findIndex(m => m._id === id)
    if (index === -1) return res.status(404).json({ error: 'Member not found' })
    members[index] = { ...members[index], name, role, description: description || '', skills: skills || [], imageUrl: imageUrl || null }
    return res.json(members[index])
  }

  if (req.method === 'DELETE') {
    const index = members.findIndex(m => m._id === id)
    if (index === -1) return res.status(404).json({ error: 'Member not found' })
    members.splice(index, 1)
    return res.json({ success: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
