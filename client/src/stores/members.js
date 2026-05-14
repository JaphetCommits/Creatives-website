import { reactive } from 'vue'

import sheenPhoto   from '../assets/sheen.png'
import raldinPhoto  from '../assets/raldin.png'
import japhetPhoto  from '../assets/Japhet pfp.png'
import ejPhoto      from '../assets/ej.png'
import stefPhoto    from '../assets/stef.png'
import kenzenPhoto  from '../assets/kenzen.png'
import justinePhoto from '../assets/justine.jpeg'
import armandoPhoto from '../assets/armando.jpg'
import keithPhoto   from '../assets/keith.jpg'
import marcPhoto    from '../assets/marc.jpg'

const LOCAL_PHOTOS = {
  'SHEEN LEE S. EDIS':        sheenPhoto,
  'ARMANDO T. SAGUIN, MSIT':  armandoPhoto,
  'RALDIN C. DISOMIMBA':      raldinPhoto,
  'STEFHANIE ANN V. BATUCAN': stefPhoto,
  'EJ A. VINCULADO':          ejPhoto,
  'KENZEN L. MINAO':          kenzenPhoto,
  'KEITH BRAIN B. LARANJO':   keithPhoto,
  'JAPHET V. BASTILLADA':     japhetPhoto,
  'MARC LESTER D. GUIDO':     marcPhoto,
  'JUSTINE P. BUNCAG':        justinePhoto,
}

const API_BASE = '/api'

export const membersStore = reactive({
  list: [],
  loading: false,
  error: null,
})

function attachLocalPhoto(member) {
  return {
    ...member,
    image: member.imageUrl || LOCAL_PHOTOS[member.name] || null,
  }
}

export async function fetchMembers() {
  membersStore.loading = true
  membersStore.error = null
  try {
    const res = await fetch(`${API_BASE}/members`)
    if (!res.ok) throw new Error('Failed to fetch')
    const data = await res.json()
    membersStore.list = data.map(attachLocalPhoto)
  } catch (err) {
    membersStore.error = err.message
    console.error('fetchMembers error:', err)
  } finally {
    membersStore.loading = false
  }
}

export async function addMember(member) {
  const res = await fetch(`${API_BASE}/members`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:        member.name,
      role:        member.role,
      description: member.description || '',
      skills:      member.skills || [],
      imageUrl:    member.image || null,
    }),
  })
  if (!res.ok) throw new Error('Failed to add member')
  const created = await res.json()
  membersStore.list.push(attachLocalPhoto(created))
  return created
}

export async function deleteMember(id) {
  const res = await fetch(`${API_BASE}/members/${id}`, { method: 'DELETE' })
  if (!res.ok) throw new Error('Failed to delete member')
  const idx = membersStore.list.findIndex((m) => m._id === id || m.id === id)
  if (idx !== -1) membersStore.list.splice(idx, 1)
}
