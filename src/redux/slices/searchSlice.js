import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAlbums = createAsyncThunk(
  'search/fetchAlbums',
  async (artist, { rejectWithValue }) => {
    try {
      const proxy = 'https://corsproxy.io/?';
      const url = `https://theaudiodb.com/api/v1/json/123/searchalbum.php?s=${encodeURIComponent(artist)}`;
      const fullUrl = proxy + encodeURIComponent(url);
      const response = await axios.get(fullUrl);
      return response.data.album || [];
    } catch (error) {
      return rejectWithValue(error.message || 'Error al buscar álbumes');
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;