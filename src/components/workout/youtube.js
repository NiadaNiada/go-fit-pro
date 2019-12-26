import axios from 'axios';

const KEY = 'AIzaSyDKAbvJ2hWviSH4pIcIsElUlYxXSbz7dIw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});