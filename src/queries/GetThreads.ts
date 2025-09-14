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
          assignedTo {
            ... on User {
              id
              fullName
            }
            ... on MachineUser {
              id
              fullName
            }
            ... on System {
              id
            }
          }
          assignedAt {
            ...DateTime
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
