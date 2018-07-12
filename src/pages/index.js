import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card.js'
import styled from 'styled-components'
import ListCard from '../components/list-card.js'



const firstCategoryToList = "politics";
const secondCategoryToList = "category-1";

class IndexPage extends React.Component {
  render() {
    const posts = [...this.props.data.allWordpressPost.edges];
    console.log(posts);
    const firstposts = posts.splice(0, 2);
    const firstPostList = posts.filter(post => {
      return (post.node.categories[0].slug === firstCategoryToList)
    });
    console.log(firstPostList);
    const secondPostList = posts.filter(post => {
      return (post.node.categories[0].slug === secondCategoryToList)
    });
    let posttolist1 = firstPostList.splice(0,4);
    let posttolist2 = secondPostList.splice(0,4);
    console.log(secondPostList);
    return (
      <main>
        <div id="left">
          {firstposts.map(post => (
            <Card
              key={post.node.id}
              slug={post.node.slug}
              image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
              title={post.node.title}
              date={post.node.date}
            />
          ))}</div>
        <div id="center">
          <h2>Latest in {firstCategoryToList}</h2>
          {posttolist1.map(post => (
            <ListCard
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
            />
          ))}
          <h2>Latest in {secondCategoryToList}</h2>
          {posttolist2.map(post => (
            <ListCard
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
            />
          ))}
        </div>
        <div id="right">Hi, I am the right content</div>
        <footer>Hi, I am a footer!</footer>
      </main>

    );
  }
}

export default IndexPage


export const indexquery = graphql`
    query indexquery {
      allWordpressPost (limit:100) {
        totalCount
        edges	{
          node  {
            acf {
              show_featured
            }
            id
            slug
            title
            date(formatString: "MMMM Do, YYYY")
            featured_media {
              source_url
            }
            categories {
              slug
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