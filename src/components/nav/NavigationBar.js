import React from 'react';
import  './NavigationBar.css';
import { history } from '../../routers/AppRouter';

class NavigationBar extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        history.push('/login');
    }

    render() {
        return (
            <div className='header'>
                <h2>HyVee</h2>
                <div className='buttonWrap'>
                    <button onClick={this.handleSubmit.bind(this)}>LOGOUT</button>
                </div>
            </div>
        )
    }
    
}

export default NavigationBar;