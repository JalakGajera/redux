// file name is in small letter coz it is reducer.

// All reducers have 2 params:
// 1. they all have Current State, Usually provide a default state.
// 2. Info that came from any action.

const seedData =[
    {
         food: "orange",
         quantity: 11
    },
    {
        food: "mango",
        quantity: 13
   },
   {
        food: "apple",
        quantity: 18
    },
    {
        food: "banana",
        quantity: 15
    }
    
]

export default (state = seedData, action)=>{
    console.log("fruit reducer is running");
    console.log(action);
    if(action.type === 'updateFruit'){
        console.log("I care about this action!!!");
        // we make a copy of state, because WE NEVER EVER EVER mutate state
        let newState = [...state];
        if(action.payload.operation === '+'){
            newState[action.payload.index].quantity++
        }else if(action.payload.operation === '-'){
            newState[action.payload.index].quantity--
        }
        
        return newState;
    }else if(action.type === 'clearInventory'){
        let newState = [...state];
        newState.forEach((item,i)=>{
            item.quantity=0;
        })
        return newState;
    }else{
        return state;
    }
}


// function frozen(state =[],action){
 //   return state;
// }
// eport default frozen;