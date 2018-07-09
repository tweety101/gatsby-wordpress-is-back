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
            }
            }
            allWordpressCategory (
                filter: {count: {ne: 0}}
            ) {
                edges {
                  node {
                    slug
                  }
                }
              }
        }
    `).then(result => {
            // Create pages for each article.
            result.data.allWordpressPost.edges.forEach(({ node }) => {
                createPage({
                    path: `/${node.slug}`,
                    component: path.resolve(`src/templates/article.js`),
                    context: {
                        slug: node.slug,
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
        });

    // Query for articles nodes to use in creating pages.
    return getArticles;
};