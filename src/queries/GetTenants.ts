import { gql } from 'graphql-request'

export const GetTenantsQuery = gql`
  query GetTenants($first: Int, $after: String) {
    tenants(first: $first, after: $after) {
      edges {
        node {
          id
          name
          identifier
          createdAt
          updatedAt
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`
