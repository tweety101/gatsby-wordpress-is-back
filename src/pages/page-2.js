import React from 'react'
import Link from 'gatsby-link'


class SecondPage extends React.Component {
  render() {
    const posts = this.props.data.allWordpressPost.edges;
    console.log(posts);

    let featuredposts = [];
    let count = 0;
    for (var i = 0, len = posts.length; count < 3 && i < len; i++) {
      if (posts[i].node.acf.show_featured === true) {
        //   pos = [...pos, i], count = count + 1
        featuredposts.push(...posts.splice(i, 1))
        count = count + 1
        i = i - 1;
      }
    };
    console.log(featuredposts);
    console.log(posts);
    return (
      
      <ul>
        {posts.map(post => (
          <li
            key={post.node.id}
          >{post.node.title}
          </li>
        ))}
      </ul>

    );
  }
}
export default SecondPage


export const indexquery2 = graphql`
    query indexquery2 {
      allWordpressPost (
        limit:100
        sort: {fields: [date], order: DESC}
      ) {
        totalCount
        edges	{
          node  {
            id
            slug
            title
            acf {
              show_featured
            }
            date(formatString: "MMMM Do, YYYY")
            featured_media {
              source_url
            }
          }
        }
      }
    }


`
