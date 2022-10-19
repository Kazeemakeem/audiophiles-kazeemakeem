import { createSlice } from '@reduxjs/toolkit'

 
const initialState = {
  screenType: 'desktop'
}

 
 const screenSlice = createSlice({
     name: 'screen',
     initialState,
    reducers: {
      updateScreenType: (state, action) => {
        state.screenType = action.payload
      },
    }
  })

 export default screenSlice.reducer
 export const { updateScreenType } = screenSlice.actions