
import { firestore } from 'firebase/admin'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const questions = firestore.collection('questions')
      await questions.get()
        .then(snapshot => {
          if (snapshot.empty) {
            return res.status(400).json({ status: 404, message: 'No questions yet' })
          }
          const data = []
          snapshot.docs.forEach((doc) => {
            if (!doc.data().deleteAt) {
              data.push({ id: doc.id, ...doc.data() })
            }
          })
          if (!data) {
            return res.status(400).json({ status: 404, message: 'No questions yet' })
          }
          const response = data.filter(question => question.answer)
          res.json(response)
        })
    } catch (e) {
      res.status(400).json(e)
    }
  } else {
    res.status(400).json({ status: 400, message: 'Type of invalid request' })
  }
}
