const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";

let initialState = {
    users: [
        {id: 1, name: "Dmytro"},
        {id: 2, name: "Kuat"},
        {id: 3, name: "Sanja"},
        {id: 4, name: "Alexandr"},
        {id: 5, name: "Jolyne"},
        {id: 6, name: "Denis"},
    ],
    messages: [
        {id: 1, user: "Kuat", text: "Hey what's up nigga?"},
        {id: 2, user: "Dmytro", text: "Fine bro and you?"},
        {id: 3, user: "Kuat", text: "Nice"},
    ],
    textAreaText: "",
    userName: "Dmytro",
}

let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            if (state.textAreaText !== "") {
                return {
                    ...state,
                    messages: [...state.messages, {id: 4, user: state.userName, text: state.textAreaText,}],
                    textAreaText: "",
                };
            }
            return state;
        case CHANGE_MESSAGE_TEXTAREA:
            return {
                ...state,
                textAreaText: action.text,
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeMessageTextareaActionCreator = (text) => ({
    type: CHANGE_MESSAGE_TEXTAREA,
    text: text,
});

export default messagesReducer;