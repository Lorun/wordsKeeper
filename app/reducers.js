import { combineReducers } from 'redux';
import { type } from './actions';

function words (state = {}, action) {
    switch (action.type) {
        case type.FETCH_WORDS:
            console.log(action);
            return {
                ...state,
                [action.result.id]: {
                    id: action.id,
                    text_en: action.result.text_en,
                    text_ru: action.result.text_ru
                }
            };
        case type.ADD_WORD:
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    text_en: action.text_en,
                    text_ru: action.text_ru
                }
            };
        case type.EDIT_WORD:
            if (!state[action.id]) {
                return state;
            }
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    text_en: action.text_en,
                    text_ru: action.text_ru
                }
            };
        case type.DELETE_WORD:
            const nextState = { ...state };
            delete nextState[action.id];
            return nextState;
        default:
            return state;
    }
}

function editableWord (state = {}, action) {
    switch (action.type) {
        case type.SET_EDITABLE_WORD:
            return Object.assign({}, state, {
                id: action.id,
                text_en: action.text_en,
                text_ru: action.text_ru
            });
        case type.UNSET_EDITABLE_WORD:
            return {};
        default:
            return state;
    }
}

function editMode(state = false, action) {
    switch (action.type) {
        case type.TOGGLE_EDIT_MODE:
            return !state;
        default:
            return state;
    }
}

export const wordsApp = combineReducers({
    words,
    editableWord,
    editMode
});