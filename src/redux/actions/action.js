import ActionTypes from './actionTypes';
import history from '../../history';

// Initialize Firebase


export function changeUserName(){
    return dispatch => dispatch({type: ActionTypes.USERNAME, payload: 'Ali'})
}

export function SignupUser(user){
    console.log(user)
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(result){
        console.log(result)
        history.push('/login')

    })
    .catch(function(error) {
        console.log(error)
      });
      
    return dispatch => dispatch({type: ActionTypes.SignupUser, payload: user})
    
}
