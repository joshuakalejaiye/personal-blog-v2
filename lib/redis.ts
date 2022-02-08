/* eslint-disable import/prefer-default-export */
import { Client, Entity, Schema, Repository } from "redis-om"

const client = new Client()

const connect = async () => {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL)
  }
}

class Article extends Entity {}

const schema = new Schema(
  Article,
  {
    title: { type: "string" },
    subtitle: { type: "string" },
    date: { type: "string" },
    articleType: { type: "string" },
    content: { type: "string" },
    articleString: { type: "string" },
    banner: { type: "string" },
    bannerAltText: { type: "string" },
    tags: { type: "string" },
    mediaType: { type: "string" },
    mediaId: { type: "string" },
    // movieTvResponse: { type: "string" },
    // gameResponse: { type: "string" },
  },
  { dataStructure: "JSON" },
)

export const createArticle = async (data) => {
  console.warn(data)
  await connect()

  const repository = new Repository(schema, client)

  const article = repository.createEntity(data)

  const id = await repository.save(article)

  return id
}
