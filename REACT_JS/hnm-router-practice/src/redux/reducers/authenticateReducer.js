let initialState = {
    id:"",
    password:"",
    authenticate:false,
}

function authenticateReducer(state=initialState, action){
    console.log('어뗸디케이트리듀서에서 Reducer action:', action);

    let { type, payload } = action;
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("어뗀티케잇리듀서에 잘 도착!")
            return {
                ...state, 
                id:payload.id, 
                password:payload.password, 
                authenticate:true
            };
        default:
            return state;
    }
}

export default authenticateReducer