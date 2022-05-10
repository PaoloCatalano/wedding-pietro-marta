import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Marta = ({ width = 400, className = "" }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "marta-open.png" }) {
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

export default Marta
