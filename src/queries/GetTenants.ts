import { gql } from 'graphql-request'
import { DateTimeFragment } from './fragments/DateTimeFragment.js'

export const GetTenantsQuery = gql`
  ${DateTimeFragment}
  
  query GetTenants($first: Int, $after: String) {
    tenants(first: $first, after: $after) {
      edges {
        node {
          id
          name
          identifier
          createdAt {
            ...DateTime
          }
          updatedAt {
            ...DateTime
          }
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
