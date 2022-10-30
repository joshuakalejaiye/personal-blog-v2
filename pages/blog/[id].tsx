import { useRouter } from "next/router"
import { Layout } from "../../components/Layout"
import posts from "../../posts"
import FullPost from "../../components/FullPost"

const BlogPost = () => {
  const postType = "BLOG"
  const router = useRouter()
  const postStr = router.query.id as string
  const postData = posts[postStr]?.data
  const pageTitle = `${postData?.title} - ${postType?.toUpperCase()}`

  return (
    <Layout title={pageTitle}>
      <FullPost data={postData} type={postType} />
    </Layout>
  )
}

export default BlogPost
