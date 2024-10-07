import ContactForm from "../ContactForms/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import s from "./App.module.css";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { selectLoading, selectError } from "../../redux/selectors";

export default function App() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  if (error) {
    toast.error("Request error");
  }
  return (
    <div className={s.app}>
      <ToastContainer autoClose={2000} />

      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && (
        <div className={s.loaderContainer}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}
