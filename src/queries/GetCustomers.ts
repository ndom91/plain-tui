import { gql } from 'graphql-request'
import { DateTimeFragment } from './fragments/DateTimeFragment.js'

export const GetCustomersQuery = gql`
  ${DateTimeFragment}
  
  query GetCustomers($first: Int, $after: String) {
    customers(first: $first, after: $after) {
      edges {
        node {
          id
          fullName
          shortName
          email {
            email
            isVerified
          }
          avatarUrl
          company {
            id
            name
          }
          status
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
      totalCount
    }
  }
`
