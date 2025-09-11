import { gql } from 'graphql-request'
import { DateTimeFragment } from './fragments/DateTimeFragment.js'

export const GetThreadsQuery = gql`
  ${DateTimeFragment}
  
  query GetThreads($filters: ThreadsFilter, $sortBy: ThreadsSort, $first: Int, $after: String) {
    threads(filters: $filters, sortBy: $sortBy, first: $first, after: $after) {
      edges {
        node {
          id
          title
          status
          priority
          statusChangedAt {
            ...DateTime
          }
          updatedAt {
            ...DateTime
          }
          createdAt {
            ...DateTime
          }
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
      totalCount
    }
  }
`
