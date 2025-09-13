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
            ... on ThreadAssignmentTransitionedEntry {
              __typename
              previousAssignee {
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
              nextAssignee {
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
            }
            ... on ThreadAdditionalAssigneesTransitionedEntry {
              timelineEventId
              title
              customerId
              externalId
              previousAdditionalAssignees {
                ... on UserActor {
                  userId
                  user {
                    publicName
                  }
                }
              }
              newAdditionalAssignees {
                ... on UserActor {
                  userId
                  user {
                    publicName
                  }
                }
              }
            }
            ... on ThreadStatusTransitionedEntry {
              timelineEventId
              title
              customerId
              externalId
              previousStatus
              newStatus
            }
            ... on ThreadPriorityChangedEntry {
              timelineEventId
              title
              customerId
              externalId
              previousPriority
              newPriority
            }
            ... on ThreadLabelsChangedEntry {
              timelineEventId
              title
              customerId
              externalId
              previousLabels {
                labelType {
                  name
                  color
                }
              }
              newLabels {
                labelType {
                  name
                  color
                }
              }
            }
            ... on LinearIssueThreadLinkStateTransitionedEntry {
              timelineEventId
              title
              customerId
              externalId
              linearIssueId
              previousLinkState
              newLinkState
            }
            ... on ServiceLevelAgreementStatusTransitionedEntry {
              timelineEventId
              title
              customerId
              externalId
              previousStatus
              newStatus
            }
            ... on ThreadDiscussionEntry {
              timelineEventId
              title
              text
              markdown
              customerId
              externalId
            }
            ... on ThreadDiscussionResolvedEntry {
              timelineEventId
              title
              customerId
              externalId
              resolvedAt {
                ...DateTime
              }
            }
            ... on MSTeamsMessageEntry {
              teamsMessageId
              text
              customerId
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
            }
            ... on ThreadLinkUpdatedEntry {
              timelineEventId
              title
              customerId
              externalId
              linkType
              linkUrl
              linkTitle
            }
            ... on DiscordMessageEntry {
              discordMessageId
              text
              customerId
              channelId
              channelName
              attachments {
                id
                fileName
                fileSize {
                  bytes
                }
                fileMimeType
              }
              reactions {
                name
                count
              }
            }
            ... on HelpCenterAiConversationMessageEntry {
              conversationId
              text
              messageType
              customerId
              wasHelpful
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
