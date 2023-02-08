// import { useSelector, useDispatch } from 'react-redux';
// import {selectContact} from './feture/contactsSlice';

import ContactList from 'components/feture/ContactList/ContactList';
import AddingContacts from 'components/feture/AddingContacts/AddingContacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <AddingContacts />
      <ContactList />
    </div>
  );
};
