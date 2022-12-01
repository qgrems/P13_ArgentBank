import { configureStore, createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: '',
        login:false,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        message:'',
        changeName:0,
    },
    reducers: {
        addToken: (state, action) => {
            //{type:token/addToken action:token
            const newToken = action.payload
            state.token = newToken
            return state
        },
        userLogin:(state,action)=>{
            //{type:token/userLogin action:bool
            const newlogin = action.payload
            state.login = newlogin
        },
        deletToken: (state, action) => {
            //{type:token/deletetToken action: token}
            state = ''
        },
        addFirstName: (state, action) => {
            //{type:token/addFirstName action:firstName
            const newFirstName = action.payload

            state.firstName = (newFirstName)
        },
        addLastName: (state, action) => {
            //{type:token/addLastName action:lastName
            const newLastName = action.payload
            state.lastName = (newLastName)
        },
        changerName:(state,action)=>
        {
            //{type:token/changerName action:changeName
            const newChangeName=action.payload
            state.changeName=newChangeName
        }
    }
})
export const tokens = configureStore({
    reducer:
        tokenSlice.reducer,
        
})

export const { addToken, addFirstName, addLastName, changerName,userLogin,targetEmail, targetPassword} = tokenSlice.actions
