import { Field, Form, Formik } from "formik"
import { ReactElement } from "react"

const ArticleForm = (): ReactElement => {
  const handleSubmit = async (values) => {
    const formData = new FormData()

    Object.entries(values).forEach(([key, value]: [string, string]) => {
      formData.append(key, value)
    })

    const object = {}
    formData.forEach((value, key) => {
      object[key] = value
    })
    const formDataJson = JSON.stringify(object)

    // console.log(formDataJson)

    const req = async () =>
      fetch("/api/articles", {
        body: formDataJson,
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })

    const res = await req()
    const result = res.json() // what do i do with this json
    console.log(result)
  }

  return (
    <Formik
      initialValues={{
        title: "",
        subtitle: "",
        date: "",
        articleType: "",
        content: "",
        articleString: "",
        banner: "",
        bannerAltText: "",
        tags: "",
        mediaId: "",
        mediaType: "",
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      <Form>
        <label>
          Title
          <Field name="title" type="text" as="input" />
        </label>

        <br />

        <label>
          Subtitle
          <Field name="subtitle" type="text" />
        </label>

        <br />

        <label>
          Date
          <Field name="date" type="text" />
        </label>

        <br />

        <label>
          ArticleType
          <Field name="articleType" type="text" />
        </label>

        <br />

        <label>
          Content
          <Field name="content" type="text" />
        </label>

        <br />

        <label>
          Article String
          <Field name="articleString" type="text" />
        </label>

        <br />

        <label>
          Banner
          <Field name="banner" type="url" />
        </label>

        <br />

        <label>
          Banner Alt Text
          <Field name="bannerAltText" type="text" />
        </label>

        <br />

        <label>
          Tags
          <Field name="tags" type="text" />
        </label>

        <br />

        <label>
          Media Id
          <Field name="mediaId" type="text" />
        </label>

        <br />

        <label>
          Media Type
          <Field name="mediaType" type="text" />
        </label>

        <br />

        <button type="submit">Post Article</button>
      </Form>
    </Formik>
  )
}

export default ArticleForm
