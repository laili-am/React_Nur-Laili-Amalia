import ListItem from "./ListItem";
const ListPassenger = (props) => {
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="black" style={{ color: "white" }}>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="#F2F2F2" className="removeBorder"></td>
        </thead>
        {props.data?.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={props.hapusPengunjung}
          />
        ))}
      </table>
    </div>
  );
};
export default ListPassenger;
