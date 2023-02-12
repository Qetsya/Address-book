import './App.css';
import { useState } from 'react';
import Container from './components/Container';
import AddressBookForm from './components/AddressBookForm';
import AddressBookList from './components/AddressBookList';

function App() {
  const [contacts, setContacts] = useState([]);

  const createContact = (value) => {
    const newContact = [...contacts, value];
    setContacts(newContact);
  }

  return (
    <Container>
      <AddressBookForm onSubmit={createContact} />
      <AddressBookList list={contacts} />
    </Container>
  );
}

export default App;
