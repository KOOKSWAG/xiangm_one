import _ from 'loadsh'

let data = {
    username:""
}
export default function login(state=data,action){
    switch(action.type){
        case 'NAME':
            let {user_name} = action.payload
            state.username=user_name
            return {...state,username:_.cloneDeep(state.username)}
        default:
            return state
    }
}