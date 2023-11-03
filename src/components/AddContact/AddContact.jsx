import {
  StyledAddContactInput,
  StyledAddContactForm,
  StyledAddContactLabel,
  StyledAddContactButton,
  StyledAddContactInputWrapper,
} from './AddContact.styled';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const AddContact = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!parseInt(number)) {
      toast.warning('Please, enter numbers for the phone form');
      return;
    }
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleOnChangeInput = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <div>
      <StyledAddContactForm onSubmit={handleSubmit}>
        <StyledAddContactLabel htmlFor="addName">Name</StyledAddContactLabel>
        <StyledAddContactInputWrapper>
          <StyledAddContactInput
            type="text"
            value={name}
            name="name"
            id="addName"
            onChange={handleOnChangeInput}
            required
          />
        </StyledAddContactInputWrapper>
        <StyledAddContactLabel htmlFor="addNumber">
          Number
        </StyledAddContactLabel>
        <StyledAddContactInputWrapper>
          <StyledAddContactInput
            type="tel"
            value={number}
            name="number"
            id="addNumber"
            onChange={handleOnChangeInput}
            placeholder="000-00-00"
            required
          />
        </StyledAddContactInputWrapper>
        <StyledAddContactButton
          disabled={!name || !name.trim() || !number || !number.trim()}
        >
          Add Contact
        </StyledAddContactButton>
      </StyledAddContactForm>
    </div>
  );
};

AddContact.propTypes = {
  addContact: PropTypes.func.isRequired,
};
