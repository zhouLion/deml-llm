import type { Project } from '../../db/trainings'
import { addProject } from '../../db/trainings'

export default defineEventHandler(async (evt) => {
  const proj = await readBody<Project>(evt)
  return addProject(proj)
})
