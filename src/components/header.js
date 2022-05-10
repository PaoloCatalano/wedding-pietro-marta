import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { GiLinkedRings } from "react-icons/gi"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--space-2)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      width: "100%",
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
    <GiLinkedRings style={{ color: "var(--gold-2)" }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
