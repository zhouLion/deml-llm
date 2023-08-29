import { generate } from 'random-words'

function useMyLocalStorage<T>(key: string, def?: any) {
  const store = useLocalStorage<T>(key, def)
  const refresh = () => {
    return nextTick().then(() => {
      return store
    })
  }
  return { data: store, refresh }
}

export class Run {
  id?: string = ''
  pid?: string = ''
  name?: string = ''
  createTime?: Date = new Date()
  updateTime?: Date = new Date()
  state?: string = 'creating'
  tags?: string[] = ['LLM']

  constructor(options: Omit<Run, 'id'>) {
    const createTime = new Date()
    const name = `$run_${generate({
      exactly: 3,
      join: '_',
    })}`
    const id = new Date().getTime().toString()
    return {
      ...this,
      name,
      id,
      createTime,
      updateTime: createTime,
      ...options,
    }
  }
}
export class Project {
  id?: string
  name?: string
  createTime?: Date
  updateTime?: Date

  constructor(options: Omit<Run, 'id'>) {
    const createTime = new Date()
    const name = `$proj_${generate({
      exactly: 3,
      join: '_',
    })}`
    const id = new Date().getTime().toString()
    return {
      ...this,
      name,
      id,
      createTime,
      updateTime: createTime,
      ...options,
    }
  }
}
export const pins: string[] = []

export function useRunStores() {
  const { data: runs, refresh } = useMyLocalStorage<Run[]>('/api/training/runs', [])
  const { data: pins, refresh: refereshPins } = useMyLocalStorage<string[]>('/api/training/pins', [])
  const { data: projects, refresh: refereshProjects } = useMyLocalStorage<Project[]>('/api/training/projects', [])

  const projectRuns = computed(() => {
    return runs.value.filter(d => d.pid === useRoute().params?.pid)
  })

  const refereshProjectRuns = () => {
    projectRuns.effect.run()
  }

  async function addRun() {
    const data = new Run({})
    runs.value.push(data)
    refresh()
    return data
  }

  function removeRun(id: string) {
    runs.value = runs.value.filter(d => d.id !== id)
    refresh()
    refereshProjectRuns()
    refereshPins()
    return 0
  }

  function pinRun(id?: string) {
    if (!id || pins.value.includes(id))
      return
    pins.value.push(id)
    refereshPins()
  }

  function unpin(id: string) {
    if (pins.value.includes(id))
      pins.value = pins.value.filter(d => d !== id)

    refereshPins()
  }

  async function onEdit(tabKey: any, action: any) {
    if (action === 'add') {
      const data = await addRun()
      pinRun(data.id)
      navigateTo(`/training/run/${data.id}`)
    }
    else {
      unpin(tabKey)
      navigateTo('/training/runs')
    }
  }

  async function removeProject(id: string) {
    projects.value = projects.value
      .filter(d => d.id !== id)
    refereshProjects()
  }

  async function addProject() {
    const project = new Project({})
    projects.value.push(project)
    refereshProjects()
  }

  async function createProjectRun(pid: string = useRoute().params?.pid) {
    const data = new Run({ pid })
    runs.value.push(data)
    refresh()
    refereshProjectRuns()
    return data
  }

  return {
    runsInTab: pins,
    pinRun,
    refereshPins,
    onEdit,
    addRun,
    removeRun,
    unpin,
    runs,
    projects,
    addProject,
    refereshProjects,
    removeProject,
    createProjectRun,
    projectRuns,
    refereshProjectRuns,
  }
}
