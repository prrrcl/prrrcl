import axios from 'axios'

class CurriculumService {
  constructor () {
    this.service = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DB_URL,
      withCredentials: true
    })
  }

  getCv () {
    return this.service.get('/cv').then(({ data }) => data)
  }
}

const cvService = new CurriculumService()

export default cvService
