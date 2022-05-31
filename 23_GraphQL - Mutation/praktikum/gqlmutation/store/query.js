import { gql } from "@apollo/client";
const GETPengunjung = gql`
  query MyQuery2 {
    list_pengunjung {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const GETbyid = gql`
  query MyQuery($id: Int!) {
    list_pengunjung(where: { id: { _eq: $id } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const DELETE = gql`
  mutation MyMutation($id: Int!) {
    delete_list_pengunjung_by_pk(id: $id) {
      id
    }
  }
`;

const INSERT = gql`
  mutation MyMutation($jenis_kelamin: String!, $nama: String!, $umur: Int!) {
    insert_list_pengunjung(
      objects: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      returning {
        id
      }
    }
  }
`;
const EDITdata = gql`
  mutation MyMutation(
    $id: Int!
    $jenis_kelamin: String!
    $nama: String!
    $umur: Int!
  ) {
    update_list_pengunjung_by_pk(
      pk_columns: { id: $id }
      _set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      id
    }
  }
`;
export { GETPengunjung, GETbyid, DELETE, INSERT, EDITdata };
