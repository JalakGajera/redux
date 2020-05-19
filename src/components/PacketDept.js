import React, { Component} from 'react'

// we want this component to know about redux.
// to do that, we need some help...or some glue
// the glue is react-redux! we need the connect function
import { connect } from 'react-redux';
import updatePacket from '../actions/packetInvUpdate';
import {bindActionCreators} from 'redux';

class PacketDept extends Component{

    increment =(operation, index)=>{
        // console.log(operation, index);
        // if(operation ==="+"){
        //     console.log(updatePacket());
        // }else if(operation === "-"){
            
        // }
        this.props.updatePacket(operation,index);
     }

    render(){
        const packetInventory = this.props.packetData.map((item,i)=>{
            return(
                <div key={i}>
                     <li>{item.food}: {item.quantity}</li>
                     <input type="button" onClick={()=>{this.increment('+',i)}} value="+"/>
                     <input type="button" onClick={()=>{this.increment('-',i)}} value="-"/>
                </div>
            )
        })
        return(
            <div>
                <h1> The Packet food department</h1>
                <ul>
                    {packetInventory}
                </ul>
            </div>
        )
    }
}

//console.log(connect);
// mapStateToProps takes 1 args,"state" and that is the rootReducer/store
function mapStateToProps(state){
    // mapStateToProps returns an object , with:
    // property is the local props name to this component
    // value will be the property in the root reducer...ie, a peice of the store
    return{
        packetData: state.packet,
    }

}
// mapDispatchToProps is how we tie our component to the dispatch
// it takes 1 args: dispatch
function mapDispatchToProps(dispatch){
    // this function returns, binfActionCreators
    // and we hand bindActionCreators an object:
    // each property will be a local prop
    // each value will be a function that is dispatch when run.
    // 2nd arg for bindActionCreaors is the dispatch.
    return bindActionCreators({
        updatePacket:updatePacket
    },dispatch)
}

//export default FrozenDept; that is written in react.
// connect takes 2 args, the first one is a function that is going to map
// a piece of state to this components props
// 2nd arg to connect: mapDispatchToProps
export default connect(mapStateToProps,mapDispatchToProps)(PacketDept);