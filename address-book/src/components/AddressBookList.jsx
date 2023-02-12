const addressGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
};
const addressCardStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  border: "1px solid black",
};

const AddressBookList = ({ list }) => {
  console.log(list);
  return (
    <div style={addressGridStyle}>
      <div style={addressCardStyle}>
        {/* <span>{props.firstName}</span>
        <span>{props.lastName}</span>
        <span>{props.number}</span> */}
      </div>
    </div>
  );
};

export default AddressBookList;
