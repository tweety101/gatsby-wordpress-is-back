import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';
import Disqus from 'disqus-react';
import LazyLoad from 'react-lazy-load';



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
class ArticleTemplate extends React.Component {
  render() {
    const thisarticle = this.props.data.wordpressPost;
    const siteinfo = this.props.data.siteMetadata;
    const disqusShortname = "hindumediabureau";
    const disqusConfig = {
      url: this.props.slug,
      identifier: "",
      title: thisarticle.title,
  };

    return (
      <Article>
        <Image
          cloudName="dkeudosjel"
          publicId={(thisarticle.featured_media) === null ? siteinfo.placeholderImage : thisarticle.featured_media.source_url.replace("http://cms.hindumediabureau.com/wp-content/uploads", "hmb-media")}
          width="auto"
          crop="fill"
          responsive />
        <Body>
          <h1>{thisarticle.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: thisarticle.content }} />
        <LazyLoad height={300} offsetVertical={200}>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </LazyLoad>
        </Body>
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
      content
      author {
        name
      }
    }
    site {
        siteMetadata {
          placeholderImage
        }
      }
  }
`