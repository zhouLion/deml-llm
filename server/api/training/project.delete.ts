import { removeProject } from '../../db/trainings'

export default defineEventHandler(async (evt) => {
  const { id } = await readBody(evt)
  return removeProject(id)
})
