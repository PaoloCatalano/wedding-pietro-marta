import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="pic-container">
        <StaticImage
          src="../images/pietro-w.png"
          loading="eager"
          placeholder="tracedSVG"
          formats={["auto", "webp", "avif"]}
          alt="pietro wedding"
          width={400}
          className="moving"
        />
        <StaticImage
          src="../images/marta-w.png"
          loading="eager"
          placeholder="tracedSVG"
          formats={["auto", "webp", "avif"]}
          alt="marta wedding"
          width={400}
          className="moving"
        />
      </div>
      <div className="title">
        <h1>Pietro e Marta</h1>
        <h1>
          <b>OGGI SPOSI!</b>
        </h1>
      </div>
    </div>
  </Layout>
)

export default IndexPage
