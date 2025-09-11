import { gql } from 'graphql-request'

export const GetThreadDetailsQuery = gql`
  query GetThreadDetails($threadId: ID!) {
    thread(threadId: $threadId) {
      id
      title
      status
      priority
      statusChangedAt
      createdAt
      updatedAt
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
          avatarUrl
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
      timeline(first: 50) {
        edges {
          node {
            id
            timestamp
            actor {
              __typename
              ... on UserActor {
                user {
                  fullName
                  publicName
                }
              }
              ... on CustomerActor {
                customer {
                  fullName
                }
              }
            }
            entry {
              __typename
              ... on ChatEntry {
                text
                customerReadAt
              }
              ... on EmailEntry {
                subject
                textContent
                from {
                  email
                  name
                }
                to {
                  email
                  name
                }
              }
              ... on NoteEntry {
                text
              }
            }
          }
        }
      }
    }
  }
`

