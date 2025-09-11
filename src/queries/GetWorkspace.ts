import { gql } from 'graphql-request'

export const GetWorkspaceQuery = gql`
  query GetWorkspace {
    myWorkspace {
      id
      name
      publicName
    }
  }
`
