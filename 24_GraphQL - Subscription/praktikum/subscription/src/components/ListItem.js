import "./Home.css";

const ListItem = (props) => {
  const { id, nama, umur, jenis_kelamin } = props.data;

  return (
    <tbody bgcolor="white">
      <tr>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{jenis_kelamin}</td>
        <td
          className="removeBorder"
          bgcolor="#f2f2f2"
          onClick={() => props.hapusPengunjung(id)}
        >
          <button>Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};
export default ListItem;
