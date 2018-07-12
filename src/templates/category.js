import React from 'react'
import ListCard from '../components/list-card.js'


class CategoryTemplate extends React.Component {
    render() {
        const categoryPosts = this.props.data.allWordpressPost.edges;
        console.log(categoryPosts);
        return (
            <div>
                <p>I am a category page</p>
                {categoryPosts.map(post => (
                <ListCard 
                key={post.node.slug}
                slug={post.node.slug}
                title={post.node.title}
                />
        ))}
            </div>
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
        }
      }
    }
  }
  `