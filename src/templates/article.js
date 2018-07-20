import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';
import Disqus from 'disqus-react';
import LazyLoad from 'react-lazy-load';
import Helmet from 'react-helmet';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Sharebuttons from '../components/sharebuttons/sharebuttons';
import PreviousIcon from '../components/previousicon';
import NextIcon from '../components/nexticon';

const Article = styled.article`
   max-width: 1000px;
   margin: auto; 
`

const Body = styled.div`
      width: 100%;
      max-width: 700px;
      margin: auto;
      overflow: hidden;
      padding: 20px;
      img {
        display: block;
        width: 100%;
        max-width: 100%;
        height:auto;
        margin-bottom:2em;
      }
      iframe {
        display: block;
        width: 100%;
        max-width: 100%;
        margin-bottom:2em;
      }
`
const Comments = styled.div`

`
const ArticleFooter = styled.div`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 10px 20px 10px 20px;
      background-color: white;
      @media (min-width: 500px){
        position: relative;
      }

`
const PrevNextLink = styled(Link)`
      text-shadow: none;
        background-image: none;
`


class ArticleTemplate extends React.Component {
  render() {
    const thisarticle = this.props.data.wordpressPost;
    const siteinfo = this.props.data.site.siteMetadata;
    const disqusShortname = "hindumediabureau";
    const disqusConfig = {
      url: "",
      identifier: this.props.location.pathname,
      title: "",
  };
    const absUrl = siteinfo.domainurl + this.props.location.pathname;
    const sharedImage = (thisarticle.featured_media) === null ? 
    siteinfo.placeholderImage 
    : thisarticle.featured_media.source_url.replace(
      "http://cms.hindumediabureau.com/wp-content/uploads", 
      "https://res.cloudinary.com/dkeudosjel/image/upload/c_fill,w_1200,h_600/v1/hmb-media/")
    
    
    return (
      <Article>
        <Helmet
        title={thisarticle.title + " | " + "HMB"}
        meta={[
          { property: 'og:type', content: "article" },
          { property: 'og:url', content: absUrl },
          { property: 'og:title', content: thisarticle.title },
          { property: 'og:image', content: sharedImage },
          { property: 'twitter:title', content: thisarticle.title },
          { property: 'twitter:image:src', content: sharedImage },
          
        ]}
      />
        <Image
          cloudName="dkeudosjel"
          publicId={(thisarticle.featured_media) === null ? siteinfo.placeholderImage : thisarticle.featured_media.source_url.replace("http://cms.hindumediabureau.com/wp-content/uploads", "hmb-media")}
          width="auto"
          crop="fill"
          responsive
          secure />
        <Body>
          <Sharebuttons
            posturl = {absUrl}
            />
          <h1>{thisarticle.title}</h1>
          <div>{ ReactHtmlParser(thisarticle.content) }</div>
        <LazyLoad height={300} offsetVertical={200}>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </LazyLoad>
        </Body>
        <ArticleFooter>
          <PrevNextLink to={this.props.pathContext.prev.slug}><PreviousIcon/></PrevNextLink>
          <PrevNextLink to={this.props.pathContext.next.slug}><NextIcon/></PrevNextLink>
        </ArticleFooter>
      </Article>
    )
  }
}


export default ArticleTemplate

export const query = graphql`
  
  query ArticleTemplate ($slug: String!) {
    wordpressPost (slug: {eq: $slug}) {
      title
      featured_media {
        source_url
      }
      date
      excerpt
      content
      author {
        name
      }
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