class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }
  async _checkResponse(data) {
    const res = await data.json();
    if (data.ok === true) {
      return res;
    }
    return Promise.reject(`Ошибка: ${res.message}`);
  }

  _getRequestOptions(method, body) {
    const requestOptions = {
      method: method,
      headers: this._headers,
      credentials: 'include'
    };
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
    return requestOptions;
  }

  async register({ name, email, password }) {
    try {
      const res = await fetch(
        `${this._url}/signup`,
        this._getRequestOptions('POST', {
          name: name,
          email: email,
          password: password
        })
      );
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async login({ email, password }) {
    try {
      const res = await fetch(
        `${this._url}/signin`,
        this._getRequestOptions('POST', {
          email: email,
          password: password
        })
      );
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async createMovies(data) {
    try {
      const res = await fetch(
        `${this._url}/movies`,
        this._getRequestOptions('POST', {
          country: data.country,
          director: data.director,
          duration: data.duration,
          year: data.year,
          description: data.description,
          image: data.image,
          trailerLink: data.trailerLink,
          thumbnail: data.thumbnail,
          movieId: data.id,
          nameRU: data.nameRU,
          nameEN: data.nameEN
        })
      );
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async deleteMovie(movieId) {
    try {
      const res = await fetch(`${this._url}/movies/${movieId}`, this._getRequestOptions('DELETE'));
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async getMovies() {
    try {
      const res = await fetch(`${this._url}/movies`, this._getRequestOptions('GET'));
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async updateUser({ name, email }) {
    try {
      const res = await fetch(
        `${this._url}/users/me`,
        this._getRequestOptions('PATCH', {
          name: name,
          email: email
        })
      );
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }
  async getContent() {
    try {
      const res = await fetch(`${this._url}/users/me`, this._getRequestOptions('GET'));
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }

  async logout() {
    try {
      const res = await fetch(`${this._url}/logout`, this._getRequestOptions('POST'));
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка:', err.message);
    }
  }
}

export const mainApi = new MainApi({
  url: 'https://api.rd-movies.nomoredomainsmonster.ru',
  headers: { 'Content-Type': 'application/json' }
});
