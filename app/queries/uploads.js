import gql from 'graphql-tag'

export default gql`
  query me {
    me {
      token
    }
  }
`
