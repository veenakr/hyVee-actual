import React from 'react';
import BadGiftCard from './BadGiftCard/BadGiftCard';
import NavigationBar from './nav/NavigationBar';
import Footer from './Footer';
import "./BadGiftCard/BadGiftCard.css";
import './SuccessPage.css';

class DashBoardPage extends React.Component {
    constructor(){
      super();
        this.state = {
          userName: '',
          content: <div><p className='text'>Hello user! Welcome to Hy-Vee's new web application.</p>
                        <p className='text'>You can generate your reporting sheet in just a click! Enter the details below and hit submit!</p>
                  </div>
        }
      }

    handleLogout = () => {
      this.props.history.push("/login");
    }

    handleOnSubmit = () => {
      this.setState({
        content: <div className="wrapper">
        <div className="content-wrapper">
            <div className="wrap">
            <span className="circle">&#10003;</span>
                <div className="content">
                    <span>Submitted Successfully!</span>
                    <span>Your data has been sent successfully to the corporate office.</span>
                </div>
            </div>
            <div className="button-wrapper">
                <button>ADD NEW ENTRY</button>
                <button onClick={this.handleLogout}>LOGOUT</button>
            </div>
        </div>
    </div>
      })
    }
  
    render() {
      return (
        <div>
         <NavigationBar/>
         {this.state.content}
         <BadGiftCard handleOnSubmit={this.handleOnSubmit}/>
         <Footer/>
        </div>
      );
    }
  }
  
  export default DashBoardPage;