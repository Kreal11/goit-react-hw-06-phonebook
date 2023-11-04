import { OneContact } from 'components/OneContact/OneContact';

import { StyledAllContactsUl } from './AllContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { selectContacts, selectFilter } from 'redux/selectors';

export const AllContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim()) ||
      contact.number.trim().includes(filter.trim())
  );

  return (
    <StyledAllContactsUl>
      {filteredContacts?.map(contact => {
        return (
          <OneContact
            key={contact.id}
            {...contact}
            deleteContact={() => dispatch(deleteContact(contact.id))}
          />
        );
      })}
    </StyledAllContactsUl>
  );
};
