import { gql } from 'graphql-request'

export const DateTimeFragment = gql`
  fragment DateTime on DateTime {
    __typename
    iso8601
  }
`