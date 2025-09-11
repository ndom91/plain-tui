import { gql } from 'graphql-request'

export const GetCustomersQuery = gql`
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
      totalCount
    }
  }
`
