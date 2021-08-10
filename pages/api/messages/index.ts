import { firestore } from "shared/firebase/admin"

export default async function getAll(req: any, res: any) {
  if (req.method === "GET") {
    try {
      const questions = firestore.collection("questions")
      await questions.get().then((snapshot: any) => {
        if (snapshot.empty) {
          return res
            .status(400)
            .json({ status: 404, message: "No questions yet" })
        }
        const data: any = snapshot.docs
          .map((doc: any) => ({ id: doc.id, ...doc.data() }))
          .filter((d: any) => !d.deleteAt && d.answer)

        if (!data) {
          return res
            .status(400)
            .json({ status: 404, message: "No questions yet" })
        }
        res.json(data)
      })
    } catch (e) {
      res.status(400).json(e)
    }
  } else {
    res.status(400).json({ status: 400, message: "Type of invalid request" })
  }
}
