import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id:"",
  email:"",
    firstName:"",
    lastName:"",
    role:""
}



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },

authInformation:(state,action) => {

  const {first_name,email,last_name,role,sub} = action.payload

  state.id= sub,
  state.email=email,
  state.firstName=first_name,
  state.lastName=last_name,
  state.role=role

  // state.userInformation = action.payload
},

// logout:(state,action)=>{
//   state.value={}
// }

  },
})


export const {authInformation, logout} = userSlice.actions
export default userSlice.reducer


//