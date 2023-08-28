import { removeRun } from '../../db/trainings'

export default defineEventHandler(async (evt) => {
  const { id } = await readBody(evt)
  return removeRun(id)
})
