const defaultMembers = [
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
  { _id: '13', name: 'EJ A. VINCULADO',          role: 'Vice President',  description: '', skills: ['Vue'], imageUrl: null },
  { _id: '14', name: 'NESFHE NINA S. MAGSANAY',  role: 'Secretary',       description: '', skills: [], imageUrl: null },
  { _id: '15', name: 'KATE NICOLE S. EDIS',      role: 'Asst. Secretary', description: '', skills: [], imageUrl: null },
  { _id: '16', name: 'MISCHI JEDA J. ELUMBA',    role: 'Treasurer',       description: '', skills: [], imageUrl: null },
  { _id: '17', name: 'PETER ROBERT C. AYONO',    role: 'Auditor',         description: '', skills: [], imageUrl: null },
  { _id: '18', name: 'KENZEN L. MINAO',          role: 'P.I.O',           description: '', skills: ['Vue'], imageUrl: null },
  { _id: '19', name: 'RENZ L. SANTIAGO',         role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '20', name: 'KEITH BRAIN B. LARANJO',   role: 'Member',          description: '', skills: ['Vue'], imageUrl: null },
  { _id: '21', name: 'JULLAN CARL J. MAGLINTE',  role: 'Member',          description: '', skills: ['Vue'], imageUrl: null },
  { _id: '22', name: 'JAPHET V. BASTILLADA',     role: 'Member',          description: '', skills: ['Vue'], imageUrl: null },
  { _id: '23', name: 'CRISTOPH B. BAGABUYO',     role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '24', name: 'CYD M. BALLON',            role: 'Member',          description: '', skills: [], imageUrl: null },
  { _id: '25', name: 'MARC LESTER D. GUIDO',     role: 'Member',          description: '', skills: ['Vue'], imageUrl: null },
  { _id: '26', name: 'JUSTINE P. BUNCAG',        role: 'Member',          description: '', skills: ['Vue'], imageUrl: null },
]

let members = [...defaultMembers]
let nextId = members.length + 1

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    return res.json(members)
  }

  if (req.method === 'POST') {
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
    return res.status(201).json(member)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
