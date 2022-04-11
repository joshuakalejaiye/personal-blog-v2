const mediaUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://node-vercel-steel.vercel.app"
  }
  return "http://localhost:8080"
}

export default mediaUrl
