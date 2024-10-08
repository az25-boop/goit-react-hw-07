import Contact from "../Contact/Contact";
import { Watch } from "react-loader-spinner";
import { useSelector } from "react-redux";
import {
  selectContactLoader,
  selectVisibleContacts,
} from "../../redux/selectors";
import s from "./ContactList.module.css";

export default function ContactList() {
  const isLoading = useSelector(selectContactLoader);
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <>
      <ul className={s.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className={s.loader}>
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
    </>
  );
}
