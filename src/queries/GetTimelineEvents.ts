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
              __typename
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
              __typename
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
              __typename
              timelineEventId
              title
              customerId
              externalId
            }
            ... on CustomerEventEntry {
              __typename
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
              __typename
              previousAssignees {
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
              nextAssignees {
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
            ... on ThreadStatusTransitionedEntry {
              __typename
              nextStatus
            }
            ... on ThreadPriorityChangedEntry {
              __typename
              previousPriority
              nextPriority
            }
            ... on ThreadLabelsChangedEntry {
              __typename
              previousLabels {
                __typename
                id
                labelType {
                  __typename
                  id
                  name
                  description
                  icon
                  color
                }
              }
              nextLabels {
                __typename
                id
                labelType {
                  __typename
                  id
                  name
                  description
                  icon
                  color
                }
              }
            }
            ... on LinearIssueThreadLinkStateTransitionedEntry {
              __typename
              linearIssueId
              previousLinearStateId
              nextLinearStateId
            }
            ... on ServiceLevelAgreementStatusTransitionedEntry {
              __typename
              previousSLAStatus: previousStatus
              nextSLAStatus: nextStatus
            }
            ... on ThreadDiscussionEntry {
              __typename
              slackChannelName
              customerId
              threadDiscussionId
              slackMessageLink
            }
            ... on ThreadDiscussionResolvedEntry {
              __typename
              slackChannelName
              customerId
              threadDiscussionId
              slackMessageLink
              resolvedAt {
                ...DateTime
              }
            }
            ... on MSTeamsMessageEntry {
              __typename
              text
              markdownContent
              msTeamsMessageId
              msTeamsMessageLink
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
              __typename
              threadLink {
                id
                threadId
                title
                url
                description
                status
              }
              previousThreadLink {
                id
                threadId
                title
                url
                description
                status
              }
            }
            ... on DiscordMessageEntry {
              __typename
              markdownContent
              discordMessageId
              discordMessageLink
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
            ... on HelpCenterAiConversationMessageEntry {
              __typename
              messageId
              helpCenterId
              messageMarkdown: markdown
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
