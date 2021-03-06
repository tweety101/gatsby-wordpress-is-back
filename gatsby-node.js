const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {
    const { createPage } = boundActionCreators;

    const getArticles = makeRequest(graphql, `
        {
            allWordpressPost {
            edges {
                node {
                    slug
                }
                next {
                    slug
                    title
                  }
                  previous {
                    slug
                    title
                  }
            }
            }
            allWordpressCategory (
                filter: {slug: {ne: "uncategorized"}}
            ) {
                edges {
                  node {
                    slug
                  }
                }
              }
            allWordpressPage {
              edges {
                node {
                   slug
                }
              }
            }
          }
    `).then(result => {
            // Create pages for each article.
            
            result.data.allWordpressPost.edges.forEach(({ node, previous, next }) => {
                const nextPost = next === null ? {slug: "", title: "No more posts"} : {slug: "../" + next.slug, title: next.title};
                const prevPost = previous === null ? {slug: "", title: "No more posts"} : {slug: "../" + previous.slug, title: previous.title};
                createPage({
                    path: `/${node.slug}`,
                    component: path.resolve(`src/templates/article.js`),
                    context: {
                        slug: node.slug,
                        prev: prevPost,
                        next: nextPost
                    },
                })
            })
            result.data.allWordpressCategory.edges.forEach(({ node }) => {
                createPage({
                    path: `/${node.slug}`,
                    component: path.resolve(`src/templates/category.js`),
                    context: {
                        slug: node.slug,
                    }
                })
            })
            result.data.allWordpressPage.edges.forEach(({ node }) => {
                createPage({
                    path: `/${node.slug}`,
                    component: path.resolve(`src/templates/page.js`),
                    context: {
                        slug: node.slug,
                    }
                })
            })
        });

    // Query for articles nodes to use in creating pages.
    return getArticles;
};