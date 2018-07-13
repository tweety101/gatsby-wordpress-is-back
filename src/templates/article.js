import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';



const Article = styled.article`
   max-width: 1000px;
   margin: auto; 
`

const Body = styled.p`
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

const ArticleTemplate = ({ data }) => (
    <Article>
        <Image 
        cloudName="dkeudosjel" 
        publicId={(data.wordpressPost.featured_media) === null ? data.site.siteMetadata.placeholderImage : data.wordpressPost.featured_media.source_url.replace("http://cms.hindumediabureau.com/wp-content/uploads","hmb-media")}
        width="auto" 
        crop="fill"
        responsive />
        <Body>
        <h1>{data.wordpressPost.title}</h1>
        <p dangerouslySetInnerHTML={{__html: data.wordpressPost.content}} />
        </Body>
    </Article>
)

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