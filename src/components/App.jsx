// import { useSelector, useDispatch } from 'react-redux';
// import {selectContact} from './feture/contactsSlice';

import ContactList from 'components/feture/ContactList/ContactList';
import AddingContacts from 'components/feture/AddingContacts/AddingContacts';

export const App = () => {
  return (
    <div>
      <AddingContacts />
      <ContactList />
    </div>
  );
};
