export interface DateTime {
  unixTimestamp: string
  iso8601: string
}

export interface Time {
  iso8601: string
}

export interface PageInfo {
  hasPreviousPage: boolean
  hasNextPage: boolean
  startCursor?: string
  endCursor?: string
}

export interface EmailAddress {
  email: string
  isVerified: boolean
  verifiedAt?: DateTime
}

export interface FileSize {
  bytes: number
  kiloBytes: number
  megaBytes: number
}

export interface Attachment {
  id: string
  fileName: string
  fileSize: FileSize
  fileExtension?: string
  fileMimeType: string
  type: AttachmentType
  createdAt: DateTime
  createdBy: string
  updatedAt: DateTime
  updatedBy: string
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export enum AttachmentType {}

export enum MessageSource {
  CHAT = 'CHAT',
  EMAIL = 'EMAIL',
  API = 'API',
  SLACK = 'SLACK',
  MS_TEAMS = 'MS_TEAMS',
  DISCORD = 'DISCORD',
}

export interface Edge<T> {
  cursor: string
  node: T
}

export interface Connection<T> {
  edges: Edge<T>[]
  pageInfo: PageInfo
}
