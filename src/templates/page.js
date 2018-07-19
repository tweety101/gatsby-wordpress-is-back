import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Page = styled.div`
    max-width: 700px;
    margin: auto;

`

const Pagetitle = styled.h1`
    padding: 20px 0px;

`
const Pagecontent = styled.div`

`


class PageTemplate extends React.Component {
  render() {
    const thisPage = this.props.data.wordpressPage
    const siteInfo = this.props.data.site.siteMetadata
    const absUrl = siteInfo.domainurl + this.props.location.pathname;
    return (
      <Page>
        <Helmet
        title={thisPage.title + " | " + "HMB"}
      />
      <Pagetitle>{thisPage.title}</Pagetitle>
      <Pagecontent>{ ReactHtmlParser(thisPage.content) }</Pagecontent>
      </Page>
    )
  }
}
  

export default PageTemplate

export const query = graphql`
  
  query PageTemplate ($slug: String!) {
    wordpressPage (slug: {eq: $slug}) {
      title
      content
    }
    site {
        siteMetadata {
          domainurl
          title
          placeholderImage
        }
      }
  }
`