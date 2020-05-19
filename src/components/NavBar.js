import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component{

    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/main">Entire Store</Link></li>
                    <li><Link to="/packet-dept">Packet Department</Link></li>
                    <li><Link to="/frozen-dept">Frozen Department</Link></li>
                    <li><Link to="/fruit-dept">Fruit Department</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;