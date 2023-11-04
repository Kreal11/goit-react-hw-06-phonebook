import { useDispatch } from 'react-redux';
import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledContactsHeader,
  StyledSearchInput,
  StyledInputSearchWrapper,
} from './SearchContact.styled';
import PropTypes from 'prop-types';
import { filterContacts } from 'redux/actions';

export const SearchContacts = ({ name }) => {
  const dispatch = useDispatch();

  const handlChangeFilter = e => {
    return dispatch(filterContacts(e.target.value));
  };

  return (
    <StyledSearchWrapper>
      <StyledContactsHeader>Contacts</StyledContactsHeader>
      <StyledSearchLabel htmlFor="filter">
        Find contacts by name👇
      </StyledSearchLabel>
      <StyledInputSearchWrapper>
        <StyledSearchInput
          id="filter"
          type="text"
          name="name"
          value={name}
          onChange={handlChangeFilter}
        />
      </StyledInputSearchWrapper>
    </StyledSearchWrapper>
  );
};

SearchContacts.propTypes = {
  name: PropTypes.string,
};
