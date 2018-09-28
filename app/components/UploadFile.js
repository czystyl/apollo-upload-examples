import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import uploadsQuery from '../queries/uploads'

const UploadFile = ({ mutate }) => {
  const handleChange = ({
    target: {
      validity,
      files: [file]
    }
  }) =>
    validity.valid &&
    mutate({
      variables: { file, data: { reason: 'elo' } },
      update(proxy, { data }) {
        console.log({ data })
        // const data = proxy.readQuery({ query: uploadsQuery })
        // data.uploads.push(singleUpload)
        // proxy.writeQuery({ query: uploadsQuery, data })
      }
    })

  return <input type="file" required onChange={handleChange} />
}

export default graphql(gql`
  mutation($file: Upload!, $data: DeviationCreateInput!) {
    createDeviation(file: $file, data: $data) {
      id
    }
  }
`)(UploadFile)
