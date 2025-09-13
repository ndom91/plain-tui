import { gql } from 'graphql-request'
import { DateTimeFragment } from './fragments/DateTimeFragment.js'

export const GetTimelineEventsQuery = gql`
  ${DateTimeFragment}
  
  query GetTimelineEvents($threadId: ID!, $first: Int, $after: String, $last: Int, $before: String) {
    thread(threadId: $threadId) {
      id
      timelineEntries(first: $first, after: $after, last: $last, before: $before) {
      edges {
        node {
          id
          customerId
          threadId
          timestamp {
            ...DateTime
          }
          llmText
          actor {
            __typename
            ... on UserActor {
              userId
              user {
                __typename
                id
                fullName
                publicName
                email
                status
                avatarUrl
              }
            }
            ... on MachineUserActor {
              machineUserId
              machineUser {
                __typename
                id
                fullName
                publicName
                description
              }
            }
            ... on CustomerActor {
              customerId
              customer {
                __typename
                id
                fullName
                email {
                  email
                }
              }
            }
          }
          entry {
            __typename
            ... on ChatEntry {
              __typename
              chatId
              chatText: text
              customerReadAt {
                ...DateTime
              }
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
            }
            ... on EmailEntry {
              emailId
              subject
              textContent
              hasMoreTextContent
              fullTextContent
              markdownContent
              hasMoreMarkdownContent
              fullMarkdownContent
              authenticity
              sentAt {
                ...DateTime
              }
              receivedAt {
                ...DateTime
              }
              sendStatus
              isStartOfThread
              from {
                name
                email
              }
              to {
                name
                email
              }
              additionalRecipients {
                name
                email
              }
              hiddenRecipients {
                name
                email
              }
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
              bounces {
                bouncedAt {
                  ...DateTime
                }
                recipient {
                  name
                  email
                }
                isSendRetriable
              }
            }
            ... on NoteEntry {
              noteId
              text
              markdown
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
            }
            ... on CustomEntry {
              externalId
              title
              type
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
            }
            ... on SlackMessageEntry {
              slackMessageLink
              slackWebMessageLink
              text
              customerId
              relatedThread {
                threadId
              }
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
              lastEditedOnSlackAt {
                ...DateTime
              }
              deletedOnSlackAt {
                ...DateTime
              }
              reactions {
                name
                imageUrl
                actors {
                  __typename
                  ... on UserActor {
                    userId
                    user {
                      publicName
                    }
                  }
                  ... on CustomerActor {
                    customerId
                    customer {
                      fullName
                    }
                  }
                }
              }
            }
            ... on SlackReplyEntry {
              slackMessageLink
              slackWebMessageLink
              customerId
              text
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
              lastEditedOnSlackAt {
                ...DateTime
              }
              deletedOnSlackAt {
                ...DateTime
              }
              reactions {
                name
                imageUrl
                actors {
                  __typename
                  ... on UserActor {
                    userId
                    user {
                      publicName
                    }
                  }
                  ... on CustomerActor {
                    customerId
                    customer {
                      fullName
                    }
                  }
                }
              }
            }
            ... on ThreadEventEntry {
              timelineEventId
              title
              customerId
              externalId
            }
            ... on CustomerEventEntry {
              timelineEventId
              title
              customerId
              externalId
            }
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
  }
`

