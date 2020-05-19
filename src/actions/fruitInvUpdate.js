export default (operation,index)=>{
    console.log("updating fruit inventory!!!")
    return{
        type: 'updateFruit',
        payload: {
            operation,
            index
        }
    }
}