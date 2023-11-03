import { OneContact } from 'components/OneContact/OneContact';

import { StyledAllContactsUl } from './AllContacts.styled';
import PropTypes from 'prop-types';

export const AllContacts = ({ deleteContact, dataContacts }) => {
  return (
    <StyledAllContactsUl>
      {dataContacts?.map(contact => {
        return (
          <OneContact
            key={contact.id}
            {...contact}
            deleteContact={deleteContact}
          />
        );
      })}
    </StyledAllContactsUl>
  );
};

AllContacts.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  dataContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
