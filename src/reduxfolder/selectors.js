import { createSelector } from '@reduxjs/toolkit';

const contacts = state => state.contacts.items;
const filter = state => state.filters.filter;

export const visibleArreyFilter = createSelector(
  [contacts, filter],
  (contacts, filter) => {
    return contacts.filter(item => {
      const visibleArrey = item.name
        .toLowerCase()
        .includes(filter.toLowerCase());
      return visibleArrey;
    });
  }
);
