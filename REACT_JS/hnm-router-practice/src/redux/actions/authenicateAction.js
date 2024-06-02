function login(id,passwaord){
    return async(dispatch, getState)=>{
        // console.log("어뗀티케잇리듀서에 잘 도착!")

        dispatch({
            type:"LOGIN_SUCCESS", 
            payload: { id, passwaord }
        });
        };
}

export const authenticateAction = {login};