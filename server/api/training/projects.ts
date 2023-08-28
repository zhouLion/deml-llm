import { getAllProjects } from '../../db/trainings'

export default defineEventHandler(async () => {
  return getAllProjects()
})
