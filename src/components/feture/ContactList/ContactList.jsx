import ListElement from 'components/feture/ListElement/ListElement';
import SearchFilter from 'components/feture/SearchFilter/SearchFilter';

import { useSelector } from 'react-redux';
import { selectContact } from 'redux/contactsSlice';
import { selectFilter } from 'redux/filterSlice';

const ContactList = () => {
  const contact = useSelector(selectContact).contacts;
  const filter = useSelector(selectFilter).filter;

  const handlefilteredContacts = () => {
    const filtredContacts = contact.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };
  return (
    <div>
      <h2>Contact</h2>
      <SearchFilter></SearchFilter>
      <ul>
        {handlefilteredContacts().map(item => (
          <ListElement key={item.id} singleContact={item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
