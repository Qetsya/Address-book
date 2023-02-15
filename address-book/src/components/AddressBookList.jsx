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
  borderRadius: "5px",
};

const AddressBookList = ({ list }) => {
  console.log(list);

  const contactCard = list.map((object) => {
    return (
    <div style={addressCardStyle}>
    <span>First name: {object.firstName}</span>
    <span>Last name:{object.lastName}</span>
    <span>Number: {object.number}</span>
    </div>
  )})

  return (
    <div style={addressGridStyle}>
      <div>{contactCard}</div>
    </div>
  );

};

export default AddressBookList;
