import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import ContactForm from "./ContactForm/ContactForm";
import Filter from './Filter/Filter';
import ContactList from "./ContactList/ContactList";
import css from './App.module.css';
import { useEffect } from "react";
import { selectIsLoading, selectError } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.body}>
      <h1 className={css.title}>Phonebook</h1>
      <div className={css.wrapper}>
        <ContactForm />
        <div className={css.contacts}>
          <h2 className={css.contactsTitle} >Contacts</h2>
          <Filter />
          <ContactList />
          {isLoading && !error && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};