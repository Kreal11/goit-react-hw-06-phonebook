import { useDispatch, useSelector } from 'react-redux';
import {
  StyledSearchWrapper,
  StyledSearchLabel,
  StyledContactsHeader,
  StyledSearchInput,
  StyledInputSearchWrapper,
} from './SearchContact.styled';
import { filterContacts } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const SearchContacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChangeFilter = e => {
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
          value={filter}
          onChange={handleChangeFilter}
        />
      </StyledInputSearchWrapper>
    </StyledSearchWrapper>
  );
};
