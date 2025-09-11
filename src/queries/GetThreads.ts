import { gql } from 'graphql-request'

export const GetThreadsQuery = gql`
query GetThreads(
  $filters: ThreadsFilter
  $sortBy: ThreadsSort
  $first: Int
  $after: String
  $last: Int
  $before: String
) {
  threads(
    filters: $filters
    sortBy: $sortBy
    first: $first
    after: $after
    last: $last
    before: $before
  ) {
      edges {
        node {
          id
          title
          status
          priority
          statusChangedAt
          updatedAt
          createdAt
          customer {
            id
            fullName
            email {
              email
            }
            company {
              name
            }
          }
          assignedToUser {
            user {
              id
              fullName
              publicName
            }
          }
          labels {
            id
            labelType {
              name
              color
              icon
            }
          }
          previewText
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

