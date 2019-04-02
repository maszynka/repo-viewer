export const SEARCH_USER = `
query ($searchString: String!) {
  search(query: $searchString, type: USER, first: 10) {
    repositoryCount
    nodes {
      ... on User {
        name
        login
      }
    }
  } 
}`

export const GET_USER = `
query ($login: String!) {
  repositoryOwner(login: $login) {
    ... on User {
      name
      bio
			repositories(first:10) {
        nodes {
          ... on Repository {
            name
            url
          }
        }
      }
    }
  }
}`

export const TEST = `
{
  __type(name: "Query") {
    name
  }
}`



