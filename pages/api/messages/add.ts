import { firestore } from "shared/firebase/admin"

export default async function AddQuestion(req: any, res: any) {
  if (req.method === "POST") {
    try {
      const { body } = req
      const newQuestion = { ...body }
      firestore
        .collection("questions")
        .add(newQuestion)
        .then((doc: any) => {
          const question = { ...newQuestion, id: doc._path.segments[1] }
          res.json(question)
        })
        .catch((err: any) => {
          res.json(err)
        })
    } catch (error) {
      res.status(400).json({ status: 400, error: error.toString() })
    }
  } else {
    res.status(400).json({ status: 400, message: "Type of invalid request" })
  }
}
