import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  page: number,
  nextPage: number,
  transitioning: boolean,
  isSlim: boolean
}

const initialState: GlobalState = {
  page: 0,
  nextPage: 0,
  transitioning: false,
  isSlim: window.innerHeight < 650
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    replacePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    replaceNextPage: (state, action: PayloadAction<number>) => {
      state.nextPage = action.payload
    },
    startTransition: (state) => {
      state.transitioning = true
    },
    endTransition: (state) => {
      state.transitioning = false
    },
    transition: (state, action: PayloadAction<number>) => {
      if (state.page === action.payload) return
      state.nextPage = action.payload
      state.transitioning = true
      
    },
    stopTransition: (state) => {
      state.transitioning = false
      state.page = state.nextPage
    },
    isSlim: (state) => {
      state.isSlim = window.innerWidth < 650
    }
  },
});

export const { 
  replacePage,
  replaceNextPage,
  startTransition,
  endTransition,
  transition,
  stopTransition,
  isSlim
} = globalSlice.actions;

export default globalSlice.reducer;