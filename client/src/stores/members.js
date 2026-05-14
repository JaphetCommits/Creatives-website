import { reactive, watch } from 'vue'

const STORAGE_KEY = 'cs_members'

const defaultMembers = []

const loadFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : defaultMembers
  } catch {
    return defaultMembers
  }
}

export const membersStore = reactive({
  list: loadFromStorage()
})

watch(
  () => membersStore.list,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
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
