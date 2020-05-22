const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXTAREA = "CHANGE-POST-TEXTAREA";
const SEND_MESSAGE = "SEND-MESSAGE";
const CHANGE_MESSAGE_TEXTAREA = "CHANGE-MESSAGE-TEXTAREA";

let store = {
    state: {
        currentUser: {
            name: "Dmytro",
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    likesCount: 32
                },
                {
                    id: 2,
                    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                    likesCount: 24
                },
                {
                    id: 3,
                    text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
                    likesCount: 12
                },
                {
                    id: 4,
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
                    likesCount: 11
                },
            ],
            textAreaText: "",
        },
        messagesPage: {
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
        },
    },

    subscribe(observer) {
        this.renderReactDOM = observer;
    },
    renderReactDOM() {
        console.log("renderReactDOM")
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            if(this.state.profilePage.textAreaText !== "") {
                let post = {
                    id: 5,
                    text: this.state.profilePage.textAreaText,
                    likesCount: 0,
                };
                this.state.profilePage.posts.push(post);
                this.dispatch({type: CHANGE_POST_TEXTAREA, text: ""});
            }
        }
        else if (action.type === CHANGE_POST_TEXTAREA) { // text
            this.state.profilePage.textAreaText = action.text;
            this.renderReactDOM(this.state);
        }
        else if (action.type === SEND_MESSAGE) { // text
            if(this.state.messagesPage.textAreaText !== "") {
                let message = {
                    id: 4,
                    user: this.state.currentUser.name,
                    text: this.state.messagesPage.textAreaText,
                };
                this.state.messagesPage.messages.push(message);
                this.dispatch({type: CHANGE_MESSAGE_TEXTAREA, text: ""});
            }
        }
        else if (action.type === CHANGE_MESSAGE_TEXTAREA) { // text
            this.state.messagesPage.textAreaText = action.text;
            this.renderReactDOM(this.state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextAreaActionCreator = (text) => ({
    type: CHANGE_POST_TEXTAREA,
    text: text,
});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeMessageTextareaActionCreator = (text) => ({
    type: CHANGE_MESSAGE_TEXTAREA,
    text: text,
});

export default store;