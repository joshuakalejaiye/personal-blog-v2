import { createArticle } from "../../lib/redis"

const handler = async (req, res) => {
  const id = await createArticle(req.body)
  res.status(200).json({ id })
}

export default handler
