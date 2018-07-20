import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';
import BottomBar from '../components/bottombar';
import LogoSvg from '../components/logo';

const Container = styled.div`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      max-width: 100%;
`
const Logo = styled.div`
      margin: 10px 0 10px 0;
      a {
        text-shadow: none;
        background-image: none;
      }
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
      padding: 0px 10px 0px 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      overflow: scroll;
      a {
        width: 100%;
        text-shadow: none;
        background-image: none;
        padding: 0px 5px 0px 5px;
        font-size: 1.2em;
        color: black;
      }
`
      




const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'og:site_name', content: 'Hindu Media Bureau' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@hindumediaburea' },
        { name: 'twitter:creator', content: '@hindumediaburea' },
        
      ]}
    />
    <Container>
    <Myheader>
    <Logo><Link
      to="/">
        <LogoSvg/>
        </Link>
        </Logo>
        
    <Mynav>
      {data.allWordpressCategory.edges.map(cat =>(
        <Link 
        key={cat.node.slug}
        to={`/${cat.node.slug}/`}
        activeStyle={{
          fontWeight: 'bold',
          backgroundColor: '#BE3431',
          color: 'white'
        }}>
        <p>{cat.node.name}</p></Link>
      ))}
    </Mynav>
  </Myheader>
      {children()}
    <BottomBar/>
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
