import { useState } from "react";

const AddressBookForm = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [number, setNumber] = useState("");

  const createContact = () => {
    const contact = {
      firstName: firstName,
      lastName: lastName,
      number: number,
    };
    props.onSubmit(contact);
  };

  const handle1Change = (event) => {
    setfirstName(event.target.value);
  };
  const handle2Change = (event) => {
    setlastName(event.target.value);
  };
  const handle3Change = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input type="text" name="firstName" onChange={handle1Change} />
      <input type="text" name="lastName" onChange={handle2Change} />
      <input type="text" name="number" onChange={handle3Change} />

      <button type="button" onClick={createContact}>
        Add
      </button>
    </div>
  );
};

export default AddressBookForm;
