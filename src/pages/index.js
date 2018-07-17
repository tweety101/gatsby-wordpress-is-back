import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card.js';
import styled from 'styled-components';
import ListCard from '../components/list-card.js';


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
const CategoryLink = styled(Link)`
        color: red;
        display: flex;
        text-decoration: none;

`

const Styledcatblock = styled.div`
        margin: 10px 0px;
`

const twopostspercat = (postsarray, value) => {
  let count = 0;
  let twoposts = [];
  for (let i = 0; i < postsarray.length && count < 2; i++) {
    if (postsarray[i].node.categories[0].slug === value) {
      count++;
      twoposts = [...twoposts, postsarray[i]]
    }
  } 
  return twoposts;
}



class IndexPage extends React.Component {
  render() {
    const posts = [...this.props.data.allWordpressPost.edges];
    const firstposts = posts.slice(0, 2);
    let categories = this.props.data.allWordpressCategory.edges;
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
          {categories.map(cat => (
            <Styledcatblock key={cat.node.slug}>
             <CategoryLink to={cat.node.slug}> <h2>{cat.node.name} -></h2></CategoryLink>
            {twopostspercat(posts, cat.node.slug).map(post => (
              <ListCard
              key={post.node.slug}
              slug={post.node.slug}
              title={post.node.title}
              image={(post.node.featured_media) === null ? this.props.data.site.siteMetadata.placeholderImage : post.node.featured_media.source_url}
              date={post.node.date}
            />
            ))}
            </Styledcatblock>
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
        edges	{
          node  {
            acf {
              show_featured
            }
            slug
            title
            date(formatString: "MMMM Do, YYYY")
            featured_media {
              source_url
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
      allWordpressCategory (
      filter: {slug: {ne: "uncategorized"}}
    )  {
      edges {
        node {
          slug
          name
          count
        }
      }
    }
    }


`