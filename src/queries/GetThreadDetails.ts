import { gql } from 'graphql-request'
import { DateTimeFragment } from './fragments/DateTimeFragment.js'

export const GetThreadDetailsQuery = gql`
  ${DateTimeFragment}
  
  query GetThreadDetails($threadId: ID!) {
    thread(threadId: $threadId) {
      id
      title
      status
      priority
      statusChangedAt {
        ...DateTime
      }
      createdAt {
        ...DateTime
      }
      updatedAt {
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
      # timeline(first: 50) {
      #   edges {
      #     node {
      #       id
      #       timestamp {
      #         ...DateTime
      #       }
      #       actor {
      #         __typename
      #         ... on UserActor {
      #           user {
      #             fullName
      #             publicName
      #           }
      #         }
      #         ... on CustomerActor {
      #           customer {
      #             fullName
      #           }
      #         }
      #       }
      #       entry {
      #         __typename
      #         ... on ChatEntry {
      #           text
      #           customerReadAt {
      #             ...DateTime
      #           }
      #         }
      #         ... on EmailEntry {
      #           subject
      #           textContent
      #           from {
      #             email
      #             name
      #           }
      #           to {
      #             email
      #             name
      #           }
      #         }
      #         ... on NoteEntry {
      #           text
      #         }
      #       }
      #     }
      #   }
      # }
    }
  }
`
