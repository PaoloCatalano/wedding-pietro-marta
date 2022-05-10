import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Pietro = ({ width = 400, className = "" }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "pietro-smile.png" }) {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#ffe5d9ff", threshold: 10 }
          )
        }
      }
    }
  `)
  return (
    <div style={{ width }} className={className}>
      <GatsbyImage
        image={getImage(data.file)}
        alt={data.file.name}
        loading="eager"
      />
    </div>
  )
}

export default Pietro
