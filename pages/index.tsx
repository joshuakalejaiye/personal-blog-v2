import Layout from "../components/Layout/Layout"

export const websiteName = "video et games"

const Home = () => {
  const pageTitle = `${Home.name} - ${websiteName}`
  return (
    <Layout title={pageTitle}>
      <div>
        <h1>Welcome!</h1>
        <p>
          I&apos;m Josh, I&apos;m a Software Developer who is—clearly—very very
          into video games, shows and movies. So much so that I thought
          it&apos;d be fun to build this site and talk about them. I hope you
          like what I have to say, or we can at least agree to disagree.
        </p>
        <p>Just click on one of the articles below to get started</p>
        <br />
        <div>Coming Soon</div>
      </div>
    </Layout>
  )
}

export default Home
