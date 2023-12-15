import { useDispatch, useSelector } from 'react-redux';
import { ContactlistButton, ContactlistList } from './Contactlist.styles';
// import { deleteContact } from 'reduxfolder/http';
// import { deleteContact } from '../../reduxfild/contactsSlice';
import { visibleArreyFilter } from 'reduxfolder/selectors';
import { deleteContact } from 'components/toGetApi/toGetApi';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleArrey = useSelector(visibleArreyFilter);
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.filters.filter);

  // const visibleArreyFilter = () => {
  //   return contacts.filter(item => {
  //     const visibleArrey = item.name
  //       .toLowerCase()
  //       .includes(filter.toLowerCase());
  //     return visibleArrey;
  //   });
  // };

  return (
    <ul>
      {visibleArrey.map(item => {
        return (
          <ContactlistList key={item.id}>
            <p>{item.name} :</p>
            <p> {item.number}</p>
            <ContactlistButton
              type="button"
              onClick={() => dispatch(deleteContact(item.id))}
            >
              Delite contact
            </ContactlistButton>
          </ContactlistList>
        );
      })}
    </ul>
  );
};
