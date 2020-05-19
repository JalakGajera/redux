export default (operation,index)=>{
    console.log("updating packet inventory!!!")
    return{
        type: 'updatePacket',
        payload: {
            operation,
            index
        }
    }
}