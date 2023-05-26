import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    addBookmarks: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookmarks: (state, action) => {
      console.log('actionpayload.title', action.payload.title);
      state.value = state.value.filter(
        (element) => element.title != action.payload.title
      );
    },
  },
});

export const { addBookmarks, removeBookmarks } = bookmarksSlice.actions;
export default bookmarksSlice.reducer;
