import { generate } from 'random-words'

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

export const runs: Run[] = []

export function addJob(run: Run) {
  const newRun = new Run(run)
  runs.push(newRun)
  return newRun.id
}

export function getAllJobs() {
  return runs.slice()
}

export function getRunsByPid(pid: string) {
  if (!pid)
    return []
  return runs.filter(run => run.pid === pid).slice()
}

export function updateRun(run: Run) {
  const matchedRun = runs.find(item => item.id === run.id)
  if (!matchedRun)
    return
  Object.assign(matchedRun, {
    ...run,
  })
}

export function removeRun(id: string) {
  const index = runs.findIndex(d => d.id === id)
  if (index >= 0) {
    runs.splice(index, 1)
    unpin(id)
    return true
  }
  return false
}

// - - -

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

export const projects: Project[] = []

export function getAllProjects() {
  return projects
}

export function addProject(project: Project) {
  const newProj = new Project(project)
  projects.push(newProj)
  return newProj.id
}

export function removeProject(id: string) {
  const index = projects.findIndex(d => d.id === id)
  if (index >= 0) {
    projects.splice(index, 1)
    return true
  }
  return false
}

export const pins: string[] = []

export function addPin(pin: string) {
  if (pins.includes(pin))
    return false
  pins.push(pin)
  return true
}

export function unpin(pin: string) {
  const index = pins.findIndex(d => d === pin)
  if (index >= 0) {
    pins.splice(index, 1)
    return true
  }
  return false
}
