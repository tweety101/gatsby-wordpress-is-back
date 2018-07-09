import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import { Image } from 'cloudinary-react';
import { Transformation } from 'cloudinary-react';

const Article = styled.article`
    width: 45rem;
`

const ArticleTemplate = ({ data }) => (
    <Article>
        <Image 
        cloudName="dkeudosjel" 
        publicId={(data.wordpressPost.featured_media) === null ? data.site.siteMetadata.placeholderImage : data.wordpressPost.featured_media.source_url}
        width="auto" 
        crop="fill"
        responsive />
        <h1>{data.wordpressPost.title}</h1>
        <p dangerouslySetInnerHTML={{__html: data.wordpressPost.title}} />
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