class MoviesApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  async getMovies() {
    try {
      const res = await fetch(`${this._url}`, {
        method: 'GET',
        headers: this._headers
      });
      return this._checkResponse(res);
    } catch (err) {
      console.error('Ошибка при выполнении запроса:', err.message);
    }
  }
}

export const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: { 'Content-Type': 'application/json' }
});
