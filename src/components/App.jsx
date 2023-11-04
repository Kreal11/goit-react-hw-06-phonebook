import { AddContact } from './AddContact/AddContact';
import { AllContacts } from './AllContacts/AllContacts';
import { SearchContacts } from './SearchContact/SearchContact';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { filterContacts } from 'redux/actions';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const handleSeacrhContact = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // };

  const handlChangeFilter = e => {
    return dispatch(filterContacts(e.target.value));
  };

  // const filteredContact = handleSeacrhContact();

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
        <AddContact />

        <SearchContacts
          // name={contacts.map(contact => contact.name)}
          changeFilter={handlChangeFilter}
        />
        {!contacts.length ? (
          <StyledPlug>There are no contacts yet😭</StyledPlug>
        ) : (
          <AllContacts dataContacts={handlChangeFilter} />
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
