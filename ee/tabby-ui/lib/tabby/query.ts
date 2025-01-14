import { graphql } from '@/lib/gql/generates'

export const listInvitations = graphql(/* GraphQL */ `
  query ListInvitations(
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    invitations(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          email
          code
          createdAt
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
`)

export const listRepositories = graphql(/* GraphQL */ `
  query repositories($after: String, $before: String, $first: Int, $last: Int) {
    repositories(after: $after, before: $before, first: $first, last: $last) {
      edges {
        node {
          id
          name
          gitUrl
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
`)

export const listJobRuns = graphql(/* GraphQL */ `
  query ListJobRuns(
    $ids: [ID!]
    $jobs: [String!]
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    jobRuns(
      ids: $ids
      jobs: $jobs
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          id
          job
          createdAt
          finishedAt
          exitCode
          stdout
          stderr
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
`)

export const queryJobRunStats = graphql(/* GraphQL */ `
  query GetJobRunStats($jobs: [String!]) {
    jobRunStats(jobs: $jobs) {
      success
      failed
      pending
    }
  }
`)

export const listJobs = graphql(/* GraphQL */ `
  query ListJobs {
    jobs
  }
`)
