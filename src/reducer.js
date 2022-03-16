export const initialSeatState = {
    seat__array: [],
    moive__now: null,
    movie__date: null,
    movie__time: null,
    user: null
};

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case 'Add_movie_name':
            return{
                ...state,
                moive__now:action.movie__name   
            }
            break;
        case 'Add__movie__date':
            return{
                ...state,
                movie__date: action.date
            }
            break;
        case 'Add__movie__theatre__info':
            return({
                ...state,
                theatre: action.theatre__name
            })
            break;
        case 'Add__movie__timing':
            {
                return({
                    ...state,
                    movie__time: action.time__movie
                })
            }
            break;
        case 'Add__movie__seats':{
            return({
                ...state,
                seat__array:[...state.seat__array,action.seatNo]
            })
        }
        break;
        default: return state;
    }
}


export default reducer;