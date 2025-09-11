import type { Actor } from './actors.js'
import type { Attachment, Connection, DateTime } from './base.js'
import type { Customer } from './customer.js'
import type { User } from './user.js'

export enum EmailAuthenticity {
  PASS = 'PASS',
  FAIL = 'FAIL',
  UNKNOWN = 'UNKNOWN',
}

export enum EmailSendStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  BOUNCED = 'BOUNCED',
  FAILED = 'FAILED',
}

export enum EmailCategory {}
// Add specific email categories as needed

export interface EmailParticipant {
  name?: string
  email: string
  emailActor?: EmailActor
}

export type EmailActor =
  | CustomerEmailActor
  | DeletedCustomerEmailActor
  | UserEmailActor
  | SupportEmailAddressEmailActor

export interface CustomerEmailActor {
  customerId: string
  customer: Customer
}

export interface DeletedCustomerEmailActor {
  customerId: string
}

export interface UserEmailActor {
  userId: string
  user: User
}

export interface SupportEmailAddressEmailActor {
  supportEmailAddress: string
}

export interface EmailBounce {
  bouncedAt: DateTime
  recipient: EmailParticipant
  isSendRetriable: boolean
}

export interface NoteEntry {
  noteId: string
  text: string
  markdown?: string
  attachments: Attachment[]
}

export interface ChatEntry {
  chatId: string
  text?: string
  customerReadAt?: DateTime
  attachments: Attachment[]
}

export interface EmailEntry {
  emailId: string
  to: EmailParticipant
  from: EmailParticipant
  additionalRecipients: EmailParticipant[]
  hiddenRecipients: EmailParticipant[]
  subject?: string
  textContent?: string
  hasMoreTextContent: boolean
  fullTextContent?: string
  markdownContent?: string
  hasMoreMarkdownContent: boolean
  fullMarkdownContent?: string
  authenticity: EmailAuthenticity
  sentAt?: DateTime
  sendStatus?: EmailSendStatus
  receivedAt?: DateTime
  attachments: Attachment[]
  isStartOfThread: boolean
  bounces: EmailBounce[]
  category: EmailCategory
}

export interface CustomEntry {
  externalId?: string
  title: string
  type?: string
  components: CustomTimelineEntryComponent[]
  attachments: Attachment[]
}

export interface SlackMessageEntry {
  slackMessageLink: string
  slackWebMessageLink: string
  text: string
  customerId: string
  relatedThread?: SlackMessageEntryRelatedThread
  attachments: Attachment[]
  lastEditedOnSlackAt?: DateTime
  deletedOnSlackAt?: DateTime
  reactions: SlackReaction[]
}

export interface SlackMessageEntryRelatedThread {
  threadId: string
}

export interface SlackReaction {
  name: string
  actors: Actor[]
  imageUrl?: string
}

export interface SlackReplyEntry {
  slackMessageLink: string
  slackWebMessageLink: string
  customerId: string
  text: string
  attachments: Attachment[]
  lastEditedOnSlackAt?: DateTime
  deletedOnSlackAt?: DateTime
  reactions: SlackReaction[]
}

export interface ThreadEventEntry {
  timelineEventId: string
  title: string
  components: EventComponent[]
  customerId: string
  externalId?: string
}

export interface CustomerEventEntry {
  timelineEventId: string
  title: string
  components: EventComponent[]
  customerId: string
  externalId?: string
}

// Component types for timeline entries
// biome-ignore lint/suspicious/noEmptyInterface: TODO
export interface CustomTimelineEntryComponent {
  // Union type - add specific component interfaces as needed
}

// biome-ignore lint/suspicious/noEmptyInterface: TODO
export interface EventComponent {
  // Union type - add specific component interfaces as needed
}

// Timeline entry union
export type Entry =
  | NoteEntry
  | ChatEntry
  | EmailEntry
  | CustomEntry
  | ThreadEventEntry
  | CustomerEventEntry
  | SlackMessageEntry
  | SlackReplyEntry

export interface TimelineEntry {
  id: string
  customerId: string
  threadId: string
  timestamp: DateTime
  entry: Entry
  actor: Actor
  llmText?: string
}

// Connection types
export type TimelineEntryConnection = Connection<TimelineEntry>

