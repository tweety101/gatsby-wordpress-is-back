import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const ArticleImage = styled.img`

`

const Article = styled.article`
    
`

const Body = styled.p`
      max-width: 700px;
      margin: auto;
`

const ArticleTemplate = ({ data }) => (
    <Article>
        <Image 
        cloudName="dkeudosjel" 
        publicId={(data.wordpressPost.featured_media) === null ? data.site.siteMetadata.placeholderImage : data.wordpressPost.featured_media.source_url}
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