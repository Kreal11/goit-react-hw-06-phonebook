import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledContactsHeader,
  StyledSearchInput,
  StyledInputSearchWrapper,
} from './SearchContact.styled';
import PropTypes from 'prop-types';

export const SearchContacts = ({ changeFilter, name }) => {
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
          onChange={changeFilter}
        />
      </StyledInputSearchWrapper>
    </StyledSearchWrapper>
  );
};

SearchContacts.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  name: PropTypes.string,
};
