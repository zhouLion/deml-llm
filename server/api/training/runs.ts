import { getAllJobs } from '../../db/trainings'

export default defineEventHandler(async () => {
  return getAllJobs()
})
