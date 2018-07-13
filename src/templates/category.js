import React from 'react'
import ListCard from '../components/list-card.js'
import Card from '../components/card.js'
import styled from 'styled-components'

const Categorywrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(300px,1fr));
  grid-template-rows: repeat()(auto-fill, 400px);
  list-style: none;
`

class CategoryTemplate extends React.Component {
    render() {
        const categoryPosts = this.props.data.allWordpressPost.edges;
        console.log(categoryPosts);
        return (
            <Categorywrapper>
                {categoryPosts.map(post => (
                <Card 
                key={post.node.slug}
                slug={post.node.slug}
                title={post.node.title}
                image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
                />
        ))}
            </Categorywrapper>
        );
    };
}



export default CategoryTemplate


export const query = graphql`
    query Categorypage ($slug: String!){
    allWordpressPost(
    filter: {categories: {slug: {eq: $slug}}}
    sort: {fields: [date] order:DESC}
    ){
      edges {
        node {
          title
          date
          slug
          tags {
            name
          }
          categories {
            slug
          }
          featured_media {
            source_url
          }
        }
      }
    }
    site {
      siteMetadata {
        placeholderImage
      }
    }
  }
  
  `