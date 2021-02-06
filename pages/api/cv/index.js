
import { firestore } from 'firebase/admin'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const cv = firestore.collection('cv').doc('gkzwYU08aLHpIDDsS0Uy')
      await cv.get()
        .then(snapshot => {
          if (snapshot.empty) {
            return res.status(400).json({ status: 404, message: 'No cv uploaded' })
          }
          const data = snapshot.data()
          if (!data) {
            return res.status(400).json({ status: 404, message: 'no cv uploaded' })
          }
          res.json(data)
        })
    } catch (e) {
      res.status(400).json(e)
    }
  } else {
    res.status(400).json({ status: 400, message: 'Type of invalid request' })
  }
}
