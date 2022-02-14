import { searchArticles } from "../../lib/redis"

const handler = async (req, res) => {
  const searchResults = req.query.searchTerm
  const articles = await searchArticles(searchResults)
  res.status(200).json({ articles })
}

export default handler
