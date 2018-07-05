import { resetSweetForm } from './sweetForm';

const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
export const setSweets = sweets => {
  return {
    type: 'GET_SWEETS',
    sweets
  }
}

export const addSweet = sweet => {
  return {
    type:'CREATE_SWEET',
    sweet
  }
}

export const removeSweet = sweet => {
  return {
    type: 'REMOVE_SWEET',
    sweet
  }
}

export const addLikes = sweet => {
  return {
    type: 'LIKE_SWEET',
    sweet
  }
}


// Async actions
export const getSweets= () => {
  return dispatch => {
    return fetch(`${API_URL}/api/sweets`)
    .then(res => res.json())
    .then(sweets => {
      dispatch(setSweets(sweets))
    })
    .catch(error => console.log(error));
  }
}

export const fetchSweet = (sweetId) => {
	return dispatch => {
		return fetch(`${API_URL}/sweets/${sweetId}`)
			.then(response => response.json())
			.then(sweet => {
				dispatch(setSweets([sweet]));
			})
			.catch(error => console.log(error));
	}
}

export const createSweet = (sweet, routerHistory) => {
  return dispatch => {
    return fetch(`https://stark-thicket-41791.herokuapp.com/api/sweets`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sweet: sweet})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(sweet => {
      dispatch(addSweet(sweet))
      dispatch(resetSweetForm())
      routerHistory.replace(`/sweets/${sweet.id}`)
    })
    .catch(error => {
      dispatch({type: 'error'})
      routerHistory.replace(`/sweets/new`)
     })
  }
}

export const deleteSweet = (sweetId, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/sweets/${sweetId}`, {
      method: "DELETE"
    })
    .then(response => {
      dispatch(removeSweet(sweetId));
      routerHistory.replace('/sweets');
    })
    .catch(error => console.log(error))
  }
}

export const likeSweet = (sweet, sweets) => {
  const updatedSweet = Object.assign(...sweet, { likes: sweet.likes + 1 })
  return dispatch => {
    return fetch(`${API_URL}/sweets/${sweet.id}`, {
      method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({sweet: updatedSweet})
      })
      .then(response => response.json())
      .then(sweet => {
        dispatch(addLikes(sweet))
        dispatch(addLikes(sweets))
      })
    .catch(error => console.log(error))
  }
}

function handleErrors(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
