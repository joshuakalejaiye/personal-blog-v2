const mediaUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return "https://joshuak.co.uk/api/"
  }
  return "http://localhost:8080/api/"
}

export default mediaUrl
