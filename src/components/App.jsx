import { useEffect, useState } from 'react';
import { AddContact } from './AddContact/AddContact';
import { AllContacts } from './AllContacts/AllContacts';
import { SearchContacts } from './SearchContact/SearchContact';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { deleteContact } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddNewContact = newData => {
    const newContact = {
      id: crypto.randomUUID(),
      position: 'default',
      ...newData,
    };

    const existingContact = contacts.some(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim()
    );
    const existingNameWithoutSpace = contacts.some(
      contact =>
        contact.name.toLowerCase().replace(' ', '').trim() ===
        newContact.name.toLowerCase().replace(' ', '').trim()
    );
    if (existingContact || existingNameWithoutSpace) {
      return toast.warning(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prev => [...prev, { ...newContact }]);
    }
  };

  // const handleDeleteContact = id => {
  //   setContacts(prev => prev.filter(contact => contact.id !== id));
  // };

  const handleSeacrhContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handlChangeFilter = e => {
    setFilter(e.target.value);
  };

  const filteredContact = handleSeacrhContact();

  return (
    <div
      style={{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <StyledHeaderH1>PHONEBOOK</StyledHeaderH1>
      <div>
        <AddContact addContact={handleAddNewContact} />

        <SearchContacts name={contacts.name} changeFilter={handlChangeFilter} />
        {!contacts.length ? (
          <StyledPlug>There are no contacts yet😭</StyledPlug>
        ) : (
          <AllContacts
            dataContacts={filteredContact}
            deleteContact={dispatch(deleteContact)}
          />
        )}
      </div>
    </div>
  );
};

const StyledPlug = styled.p`
  text-align: center;
  margin-top: 30px;
  font-size: 18px;
`;

const StyledHeaderH1 = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: 2px;
  line-height: 1.2;
  margin-bottom: 10px;
`;
