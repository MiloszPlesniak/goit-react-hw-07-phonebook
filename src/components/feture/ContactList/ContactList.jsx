import ListElement from 'components/feture/ListElement/ListElement';
import SearchFilter from 'components/feture/SearchFilter/SearchFilter';

import { useSelector } from 'react-redux';
import { getContact, getFilter } from 'redux/selectors';

const ContactList = () => {
  const { items, isLoading } = useSelector(getContact);
  const { filter } = useSelector(getFilter);

  const handlefilteredContacts = () => {
    const filtredContacts = items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtredContacts;
  };
  return (
    <div>
      <h2>Contact</h2>
      <SearchFilter></SearchFilter>
      {isLoading && <p>Loading...</p>}
      {isLoading === false && items.length === 0 ? (
        <p>Brak kontaktów</p>
      ) : (
        <ul>
          {handlefilteredContacts().map(item => (
            <ListElement key={item.id} singleContact={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
