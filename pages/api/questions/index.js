import { firestore } from 'firebase/admin'

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { body } = req
      const newQuestion = { ...body }
      if (!newQuestion.name) newQuestion.name = 'Anonymous'
      firestore
        .collection('questions')
        .add(newQuestion)
        .then((doc) => {
          const question = { ...newQuestion, id: doc._path.segments[1] }
          res.json(question)
        }).catch((err) => {
          res.json(err)
        })
    } catch (error) {
      res.status(400).json({ status: 400, error: error.toString() })
    }
  } else {
    res.status(400).json({ status: 400, message: 'Type of invalid request' })
  }
}
