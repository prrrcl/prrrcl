import axios from 'axios'

class QuestionsService {
  constructor () {
    this.service = axios.create({
      baseURL: process.env.NEXT_PUBLIC_DB_URL,
      withCredentials: true
    })
  }

  getQuestions () {
    return this.service.get('/questions/all').then(({ data }) => data)
  }

  addQuestion (question) {
    return this.service.post('/questions', question).then(({ data }) => data)
  }
}

const questionsService = new QuestionsService()

export default questionsService
