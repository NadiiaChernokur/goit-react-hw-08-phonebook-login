// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6574d9e0b2fbb8f6509cb8c9.mockapi.io';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const response = await axios.get('/contacts');
//   return response.data;
// });

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (value, thunkAPI) => {
//     const { name, number } = value;

//     try {
//       const response = await axios.post('/contacts', {
//         name: name,
//         phone: number,
//       });

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${taskId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
