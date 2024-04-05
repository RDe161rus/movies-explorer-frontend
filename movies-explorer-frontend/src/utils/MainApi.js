const URL = 'https://api.movies.nomoredomainsmonster.ru';

const checkResponse = res => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

export const login = (email, password) => {
  return fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res => checkResponse(res));
};

export const register = (name, email, password) => {
  return fetch(`${URL}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(res => checkResponse(res));
};

export const checkToken = token => {
  return fetch(`${URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }).then(res => checkResponse(res));
};

export const saveMovie = data => {
  return fetch(`${URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }).then(res => checkResponse(res));
};

export const getSaveMovies = () => {
  return fetch(`${URL}/movies`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  }).then(res => checkResponse(res));
};

export const deleteMovie = movieId => {
  return fetch(`${URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  }).then(res => checkResponse(res));
};

export const getUser = () => {
  return fetch(`${URL}/users/me`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    }
  }).then(res => checkResponse(res));
};

export const editUser = dataUser => {
  return fetch(`${URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify(dataUser)
  }).then(res => checkResponse(res));
};
