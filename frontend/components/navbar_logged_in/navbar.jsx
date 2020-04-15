import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdown: false
        }
        this.handleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown() {
       const currentState = this.state.dropdown
       this.setState({dropdown: !currentState})
    }
    render() {
        return(
                <nav className="main-header-nav">
                 <div className="small-logo">Dog<span className="small-logo-part2">Eared</span></div>
                    <ul className="personal-menu">
                        <li className="clickable" role="button" aria-haspopup="true">Home</li>
                        <li className="clickable" role="button" aria-haspopup="true">My Books</li>
                        <li className="clickable" role="button" aria-haspopup="true">Browse</li>
                        
                    </ul>
                        {/* <ul className="profile" onClick={this.handleDropdown}>User
                            <li className={this.state.dropdown ? "drop-down-content" : "no-display"}></li>
                            <li onClick={this.props.logout}>Sign out</li>
                        </ul> */}
                    <button className="logout" onClick={this.props.logout}>Sign out</button>
                   
                </nav>
                <div className="">

                </div>
        )
    }
}

export default Navbar;