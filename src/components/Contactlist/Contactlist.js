import { useDispatch, useSelector } from 'react-redux';
import { ContactlistButton, ContactlistList, Name } from './Contactlist.styles';
import { visibleArreyFilter } from 'reduxfolder/selectors';
import { deleteContact } from 'components/toGetApi/toGetApi';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleArrey = useSelector(visibleArreyFilter);

  return (
    <ul>
      {visibleArrey.map(item => {
        return (
          <ContactlistList key={item.id}>
            <Name>{item.name} </Name>
            <Name> {item.number}</Name>
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
