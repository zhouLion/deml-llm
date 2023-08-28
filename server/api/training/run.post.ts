import type { Run } from '../../db/trainings'
import { addJob } from '../../db/trainings'

export default defineEventHandler(async (evt) => {
  const run = await readBody<Run>(evt)
  return addJob(run)
})
