import { reactive, watch } from 'vue'

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

const STORAGE_KEY = 'cs_members'

const defaultMembers = [
  { id: 1,  name: 'SHEEN LEE S. EDIS',       role: 'Founder',          description: '', skills: [], image: sheenPhoto   },
  { id: 2,  name: 'ARMANDO T. SAGUIN, MSIT',  role: 'Adviser',          description: '', skills: [], image: armandoPhoto },
  { id: 3,  name: 'JUVELITO MARTINEZ',        role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 4,  name: 'MARK MASCARDO',            role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 5,  name: 'WHELSTER R. ESMADE',       role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 6,  name: 'HENZON DIONSAY',           role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 7,  name: 'JUNE A. JACINTO',          role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 8,  name: 'ROBERT MAYO L. ELUMBA',    role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 9,  name: 'GEHAN RESALUTE',           role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 10, name: 'MARKLAN A. HAMPAC',        role: 'Mentor',           description: '', skills: [], image: null          },
  { id: 11, name: 'RALDIN C. DISOMIMBA',      role: 'Member / Mentor',  description: '', skills: [], image: raldinPhoto  },
  { id: 12, name: 'STEFHANIE ANN V. BATUCAN', role: 'President',        description: '', skills: [], image: stefPhoto    },
  { id: 13, name: 'EJ A. VINCULADO',          role: 'Vice President',   description: '', skills: [], image: ejPhoto      },
  { id: 14, name: 'NESFHE NINA S. MAGSANAY',  role: 'Secretary',        description: '', skills: [], image: null          },
  { id: 15, name: 'KATE NICOLE S. EDIS',      role: 'Asst. Secretary',  description: '', skills: [], image: null          },
  { id: 16, name: 'MISCHI JEDA J. ELUMBA',    role: 'Treasurer',        description: '', skills: [], image: null          },
  { id: 17, name: 'PETER ROBERT C. AYONO',    role: 'Auditor',          description: '', skills: [], image: null          },
  { id: 18, name: 'KENZEN L. MINAO',          role: 'P.I.O',            description: '', skills: [], image: kenzenPhoto  },
  { id: 19, name: 'RENZ L. SANTIAGO',         role: 'Member',           description: '', skills: [], image: null          },
  { id: 20, name: 'KEITH BRAIN B. LARANJO',   role: 'Member',           description: '', skills: [], image: keithPhoto   },
  { id: 21, name: 'JULLAN CARL J. MAGLINTE',  role: 'Member',           description: '', skills: [], image: null          },
  { id: 22, name: 'JAPHET V. BASTILLADA',     role: 'Member',           description: '', skills: [], image: japhetPhoto  },
  { id: 23, name: 'CRISTOPH B. BAGABUYO',     role: 'Member',           description: '', skills: [], image: null          },
  { id: 24, name: 'CYD M. BALLON',            role: 'Member',           description: '', skills: [], image: null          },
  { id: 25, name: 'MARC LESTER D. GUIDO',     role: 'Member',           description: '', skills: [], image: marcPhoto    },
  { id: 26, name: 'JUSTINE P. BUNCAG',        role: 'Member',           description: '', skills: [], image: justinePhoto },
]

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return defaultMembers.map(m => ({ ...m }))
    const parsed = JSON.parse(stored)
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultMembers.map(m => ({ ...m }))
    return parsed.map(m => {
      const def = defaultMembers.find(d => d.id === m.id)
      return { ...m, image: def ? def.image : m.image }
    })
  } catch {
    return defaultMembers.map(m => ({ ...m }))
  }
}

export const membersStore = reactive({
  list: loadFromStorage()
})

watch(
  () => membersStore.list,
  (val) => {
    const toStore = val.map(m => ({ ...m, image: undefined }))
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore))
  },
  { deep: true }
)

export const addMember = (member) => {
  membersStore.list.push({
    id: Date.now(),
    ...member
  })
}

export const deleteMember = (id) => {
  const idx = membersStore.list.findIndex((m) => m.id === id)
  if (idx !== -1) membersStore.list.splice(idx, 1)
}
