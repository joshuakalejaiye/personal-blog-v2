import { useRouter } from "next/router"
import { Layout } from "../../components/Layout"
import posts from "../../posts"
import FullPost from "../../components/FullPost"
import { Button } from "../../components/Button"

const ProjectPost = () => {
  const postType = "PROJECT"
  const router = useRouter()
  const postStr = router.query.id as string
  const postData = posts[postStr]?.data
  const pageTitle = `${postData?.title} - ${postType?.toUpperCase()}`

  return (
    <Layout title={pageTitle}>
      <FullPost data={postData} type={postType} />
      <Button route={postData.links[0]} newTab>
        GITHUB REPO
      </Button>
    </Layout>
  )
}

export default ProjectPost
