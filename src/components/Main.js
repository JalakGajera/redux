import React, {Component} from 'react';
import { connect } from 'react-redux';
import clearInventory from '../actions/clearInventory';
import {bindActionCreators} from 'redux';

class Main extends Component{

    // when we need more logic to onclick then ue this method and apply to it.
    // clearInventoryAction = ()=>{
    //     this.props.clearInventory();
    // }

    render(){
        const frozenQuantity =this.props.frozenData.reduce((accum, frozenItem)=>accum+frozenItem.quantity,0)
        const fruitQuantity =this.props.fruitData.reduce((accum, fruitItem)=>accum+fruitItem.quantity,0)
        const packetQuantity =this.props.packetData.reduce((accum, packetItem)=>accum+packetItem.quantity,0)
        return(
            <div>
                <h2>FrozenDept:{frozenQuantity}</h2>
                <h2>FruitDept:{fruitQuantity}</h2>
                <h2>PacketDept:{packetQuantity}</h2>
                <button onClick={this.props.clearInventory}>Clear all Ineventory!!</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        frozenData: state.frozen,
        fruitData: state.fruit,
        packetData: state.packet
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        clearInventory: clearInventory
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);