import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

export default function Page_2() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "erropi.jpeg" }) {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `)
  return (
    <div style={{ width: 600 }}>
      <GatsbyImage
        image={getImage(data.file)}
        alt={data.file.name}
        loading="eager"
      />
    </div>
  )
}
