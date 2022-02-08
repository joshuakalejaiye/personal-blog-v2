import { createArticle } from "../../lib/redis"

const Handler = async (req, res) => {
  let id: string

  try {
    id = await createArticle(req.body)
  } catch (error) {
    res.status(404)
    return
  }

  res.status(200).JSON({ id })
}

export default Handler
