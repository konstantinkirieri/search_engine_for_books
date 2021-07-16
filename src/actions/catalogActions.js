import { Store } from '@material-ui/icons';
import { createAction } from 'redux-api-middleware';

export const SHOW_MORE_REQUEST = '@@catalog/SHOW_MORE_REQUEST';
export const SHOW_MORE_SUCCESS = '@@catalog/SHOW_MORE_SUCCESS';
export const SHOW_MORE_ERROR = '@@catalog/SHOW_MORE_ERROR';
export const SEARCH_BOOKS_REQUEST = '@@catalog/SEARCH_BOOKS_REQUEST'
export const SEARCH_BOOKS_SUCCESS = '@@catalog/SEARCH_BOOKS_SUCCESS'
export const SEARCH_BOOKS_ERROR = '@@catalog/SEARCH_BOOKS_ERROR'

export const showMore = (keyword, category, relevance, newFirstIdx) => {
    return createAction({
        endpoint: `https://www.googleapis.com/books/v1/volumes?q=${keyword}+subject:${category}&orderBy=${relevance}&startIndex=${newFirstIdx}&maxResults=30&key=AIzaSyBCe32QXvsSFgROEe1_8Ak5FkuvLAIdbqM`,
        method: 'GET',
        types: [
            {
                type: SHOW_MORE_REQUEST,
                payload: { newFirstIdx }
            },
            {
                type: SHOW_MORE_SUCCESS,
                payload: async (action, paload, res) => {
                    const json = await res.json();
                    return json;
                }
            },
            SHOW_MORE_ERROR
        ]
    })
}
export const searchBooks = (keyword, category, relevance, firstIdx) => {
    return createAction({
        endpoint: `https://www.googleapis.com/books/v1/volumes?q=${keyword}+subject:${category}&orderBy=${relevance}&startIndex=${firstIdx}&maxResults=30&key=AIzaSyBCe32QXvsSFgROEe1_8Ak5FkuvLAIdbqM`,
        // endpoint: `www.fdsks.com`, проверка ошибки
        method: 'GET',
        types: [
            {
                type: SEARCH_BOOKS_REQUEST,
                payload: { keyword, category, relevance, firstIdx }
            },
            {
                type: SEARCH_BOOKS_SUCCESS,
                payload: async (action, paload, res) => {
                    const json = await res.json();
                    return json;
                }
            },
            SEARCH_BOOKS_ERROR
        ]
    })
}