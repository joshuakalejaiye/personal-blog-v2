import { ReactElement } from "react"
import { websiteName } from ".."
import ArticleForm from "../../components/ArticleForm/ArticleForm"
import Layout from "../../components/Layout/Layout"

const PostArticle = (): ReactElement => (
  <Layout title={`Post a New Article | Admin - ${websiteName}`}>
    <ArticleForm />
  </Layout>
)

export default PostArticle
