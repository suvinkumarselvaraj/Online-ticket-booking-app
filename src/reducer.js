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
            console.log(action.item.id);
            let new__seat__array = [...state.seat__array];
            return({
                ...state,
                seat__array:[...state.seat__array,action.item],
              
            })
        }
        case 'Remove__movie__seats':{
            
            // const index = state.seat__array.findIndex((removed__seat)=>
            //     removed__seat.id === action.id);   
             let new__seat__array = [...state.seat__array];
             console.log(action.item.id);
             console.log(state.seat__array);
            const index = state.seat__array.findIndex((seat) => seat.id === action.item.id                                                               );
            console.log(index);
            if(index >=0)
            {
                console.log(index);
                new__seat__array.splice(index,1);
                console.log(new__seat__array );
                
            }
            return {
                ...state,
                seat__array: new__seat__array,
                
            }
        }
        break;
        case 'Add__to__count':{
            return({
                ...state,
                total__count: action.value
            })
        }
        default: return state;
    }
}


export default reducer;