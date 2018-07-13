import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card.js'
import styled from 'styled-components'
import ListCard from '../components/list-card.js'


const Styledmain = styled.main`
      max-width: 1200px;
      margin: auto;
      @media (min-width: 500px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr auto;
      }
      @media (min-width: 900px) {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
`
const Left = styled.div`
        list-style: none;
      @media (min-width: 500px){
        grid-column : span 3;
        display: flex;
      }
      @media (min-width: 900px) {
          grid-column: span 1;
          display: block;
        }
`

const Center = styled.div`
        padding: 20px;
`
const Right = styled.div`
        padding: 20px;
        background-color: #f5f5f5;
`
const Styledfooter = styled.footer`
      grid-column: span 3;
      padding: 30px;
      text-align: center;
      font-size: 1.4em;
      background-color: rgb(117, 131, 90);
      color: white;
`

const firstCategoryToList = "politics";
const secondCategoryToList = "category-1";

class IndexPage extends React.Component {
  render() {
    const posts = [...this.props.data.allWordpressPost.edges];
    const firstposts = posts.splice(0, 2);
    const firstPostList = posts.filter(post => {
      return (post.node.categories[0].slug === firstCategoryToList)
    });
    const secondPostList = posts.filter(post => {
      return (post.node.categories[0].slug === secondCategoryToList)
    });
    let posttolist1 = firstPostList.splice(0,4);
    let posttolist2 = secondPostList.splice(0,4);
    return (
      <Styledmain>
        <Left>
        {firstposts.map(post =>(
          <Card
          key={post.node.slug}
          slug={post.node.slug}
          title={post.node.title}
          image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
          date={post.node.date}
          excerpt={post.node.excerpt}
          />
        ))}
        </Left>
        <Center>
          <h2>Latest in {firstCategoryToList}</h2>
          {posttolist1.map(post => (
            <ListCard
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
              image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
              date={post.node.date}
            />
          ))}
          <h2>Latest in {secondCategoryToList}</h2>
          {posttolist2.map(post => (
            <ListCard
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
              image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
              date={post.node.date}
            />
          ))}
        </Center>
        <Right>Latest From The Web</Right>
        <Styledfooter>Not sure what to put here</Styledfooter>
      </Styledmain>

    );
  }
}

export default IndexPage


export const indexquery = graphql`
    query indexquery {
      allWordpressPost (limit:20) {
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
              slug
              alt_text
            }
            categories {
              slug
            }
            tags {
              name
            }
            excerpt
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