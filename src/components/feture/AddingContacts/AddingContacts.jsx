import css from './AddingContacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContact, addContact } from 'redux/contactsSlice';
import { useRef } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const AddingContacts = () => {
  const contacts = useSelector(selectContact).contacts;
  const dispatch = useDispatch();
  const name = useRef(null);
  const number = useRef(null);

  const addContactInPhoneBook = e => {
    console.log(e);
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: name.current.value,
      number: number.current.value,
    };
    const info = newContact.name + ' is already in contacts';
    checkRepeatedContact(newContact)
      ? Notify.failure(info)
      : dispatch(addContact(newContact));
    e.currentTarget.reset();
  };
  const checkRepeatedContact = contact =>
    contacts.some(item => item.name === contact.name);

  return (
    <div>
      <form onSubmit={addContactInPhoneBook}>
        <h2>Name</h2>
        <label>
          <input
            ref={name}
            className={css.AddFormInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <br />
        </label>
        <label>
          <input
            ref={number}
            className={css.AddFormInput}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <br />
        </label>
        <button type="submit" className={css.AddFormBtn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddingContacts;
