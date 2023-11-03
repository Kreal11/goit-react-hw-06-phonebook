import { OneContact } from 'components/OneContact/OneContact';

import { StyledAllContactsUl } from './AllContacts.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { selectContacts } from 'redux/selectors';

export const AllContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  return (
    <StyledAllContactsUl>
      {contacts?.map(contact => {
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

// AllContacts.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   dataContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };
