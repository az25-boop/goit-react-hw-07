import s from "./Contact.module.css";
import { Watch } from "react-loader-spinner";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectContactDeleter } from "../../redux/selectors";

export default function Contact({ data }) {
  const dispatch = useDispatch();
  const contactDeleter = useSelector(selectContactDeleter);
  return (
    <div>
      {contactDeleter === data.id ? (
        <div className={s.deleteContainer}>
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
      ) : (
        <div className={s.contact}>
          <div>
            <p>
              <IoIosContact className={s.icon} />
              {data.name}
            </p>
            <p>
              <FaPhoneAlt className={s.icon} />
              {data.number}
            </p>
          </div>
          <button onClick={() => dispatch(deleteContact(data.id))}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
