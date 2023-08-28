import { getRunsByPid } from '../../db/trainings'

export default defineEventHandler(async (evt) => {
  const { pid } = getQuery(evt)
  return getRunsByPid(pid?.toString() || '')
})
