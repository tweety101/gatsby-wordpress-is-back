import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';


const Container = styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
`
const Logo = styled.div`
`
const Myheader = styled.header`
    grid-column: span 3;
    text-align: center;
    padding: 10px;
    margin: 0px 0px 20px 0px;
    box-shadow: 0px 2px 5px #c4c4c4;
`
const Mynav = styled.nav`
      max-width: 1200px;
      margin: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      overflow: scroll;
      a {
        text-decoration: none;
      }
`
const Copyright = styled.div`
      width: 100%;
      text-align: center;
      background-color: grey;
      color: white;
      font-size: 0.8rem;
      padding: 10px;
    `
      




const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container>
    <Myheader>
    <Logo><Link
      to="/">
          <Image cloudName="dkeudosjel"
              publicId="Hindu_Media_Bureau_logo_2.jpg"
              secure
            >s
            <Transformation
                width="200"
                dpr="auto"
                crop="scale"
              />
            </Image>
        </Link>
        </Logo>
    <Mynav>
      {data.allWordpressCategory.edges.map(cat =>(
        <Link 
        to={`/${cat.node.slug}/`}>{cat.node.name}</Link>
      ))}
    </Mynav>
  </Myheader>
      {children()}
    <Copyright>Copyright @ Hindu Media Bureau</Copyright>
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query Layoutinfo {
      site {
      siteMetadata {
        title
      }
    }
    allWordpressCategory (
      filter: {slug: {ne: "uncategorized"}}
    )  {
      edges {
        node {
          slug
          name
          count
        }
      }
    }
  }
`
