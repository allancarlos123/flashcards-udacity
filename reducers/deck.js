import {
    RECEIVE_DECK
} from './../actions/decks';

export default function deck(
    state = {
        deck: []
    },
    action
) {
    switch (action.type) {
        case RECEIVE_DECK:
            return Object.assign({}, state, {
                deck: action.deck
            })
        default:
            return state
    }
}