const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            avaUrl: "https://pimg.mycdn.me/getImage?disableStub=true&type=VIDEO_S_720&url=https%3A%2F%2Fvdp.mycdn.me%2FgetImage%3Fid%3D363220240992%26idx%3D7%26thumbType%3D32%26f%3D1&signatureToken=F0lcUpewlAkQXZo2eeLneA",
            name: "Michal Palich Terentev",
            city: "Sumy",
            country: "Ukraine",
            description: "What about the money?",
        },
        {
            id: 2,
            followed: false,
            avaUrl: "https://sun9-20.userapi.com/c850432/v850432363/122bf/NBjzUD_2Tic.jpg?ava=1",
            name: "Gleb Kol",
            city: "Muhosransk",
            country: "Russia",
            description: "Obama, if you were a man...",
        },
        {
            id: 3,
            followed: true,
            avaUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dmitry_Nagiev_2017_4.jpg/274px-Dmitry_Nagiev_2017_4.jpg",
            name: "Dmytro Nagiev",
            city: "Kiev",
            country: "Ukraine",
            description: "",
        },
    ],
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id === action.userId) {
                        u.followed = true;
                    }
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map((u) => {
                    if (u.id === action.userId) {
                        u.followed = false;
                    }
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        default:
            return state;
    }

}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;