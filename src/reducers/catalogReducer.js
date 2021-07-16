import {
    SHOW_MORE_REQUEST,
    SHOW_MORE_SUCCESS,
    SHOW_MORE_ERROR,
    SEARCH_BOOKS_ERROR,
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_REQUEST
} from '../actions/catalogActions';

const initialStore = {
    books: {},
    totalItems: 0,
    isLoading: false,
    isAdding: false,
    messageError: '',
    keyword: '',
    category: '',
    relevance: '',
    firstIdx: 1,
}

export default function catalogReducer(store = initialStore, action) {
    switch (action.type) {
        case SHOW_MORE_REQUEST: {
            const { newFirstIdx } = action.payload

            return {
                ...store,
                isAdding: true,
                firstIdx: newFirstIdx
            }
        }
        case SHOW_MORE_SUCCESS: {
            const { items } = action.payload;
            let newBooks = {};
            if(items) {
                for(let i = 0; i < items.length; i++) {
                    const key = i + store.firstIdx;
                    newBooks[key] = {};
                    items[i].volumeInfo.categories ? 
                        newBooks[key].categories = [...items[i].volumeInfo.categories] : 
                        newBooks[key].categories = [];
                    items[i].volumeInfo.title ? 
                        newBooks[key].title = items[i].volumeInfo.title : 
                        newBooks[key].title = '';
                    items[i].volumeInfo.imageLinks ? 
                        (items[i].volumeInfo.imageLinks.smallThumbnail ? 
                            newBooks[key].imageLinks = items[i].volumeInfo.imageLinks.smallThumbnail :
                            newBooks[key].imageLinks = '') : 
                        newBooks[key].imageLinks = '';
                    items[i].volumeInfo.description ? 
                        newBooks[key].description = items[i].volumeInfo.description : 
                        newBooks[key].description = '';
                    items[i].volumeInfo.authors ? 
                        newBooks[key].authors = [...items[i].volumeInfo.authors] : 
                        newBooks[key].authors = [];
                }
            }

            return {
                ...store,
                isAdding: false,
                books: {
                    ...store.books,
                    ...newBooks
                },
            }
        }
        case SHOW_MORE_ERROR: {
            return {
                ...store,
                isAdding: false
            }
        }
        case SEARCH_BOOKS_REQUEST: {
            const { keyword, category, relevance, firstIdx } = action.payload

            return {
                ...store,
                isLoading: true,
                keyword: keyword,
                category: category,
                relevance: relevance,
                firstIdx: firstIdx,
            }
        }
        case SEARCH_BOOKS_SUCCESS: {
            const { items, totalItems } = action.payload;
            let newBooks = {};
            if(items) {
                for(let i = 0; i < items.length; i++) {
                    const key = i + store.firstIdx;
                    newBooks[key] = {};
                    items[i].volumeInfo.categories ? 
                        newBooks[key].categories = [...items[i].volumeInfo.categories] : 
                        newBooks[key].categories = [];
                    items[i].volumeInfo.title ? 
                        newBooks[key].title = items[i].volumeInfo.title : 
                        newBooks[key].title = '';
                    items[i].volumeInfo.imageLinks ? 
                        (items[i].volumeInfo.imageLinks.smallThumbnail ? 
                            newBooks[key].imageLinks = items[i].volumeInfo.imageLinks.smallThumbnail :
                            newBooks[key].imageLinks = '') : 
                        newBooks[key].imageLinks = '';
                    items[i].volumeInfo.description ? 
                        newBooks[key].description = items[i].volumeInfo.description : 
                        newBooks[key].description = '';
                    items[i].volumeInfo.authors ? 
                        newBooks[key].authors = [...items[i].volumeInfo.authors] : 
                        newBooks[key].authors = [];
                }
            }

            return {
                ...store,
                isLoading: false,
                totalItems: totalItems,
                books: {...newBooks},
                messageError: ''
            }
        }
        case SEARCH_BOOKS_ERROR: {
            const { message } = action.payload;

            return {
                ...store,
                isLoading: false,
                messageError: message
            }    
        }
        default:
            return store
    }
}