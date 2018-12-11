import React from 'react';
import BadGiftCardReportingForm from './BadGiftCard';
import NavigationBar from './nav/NavigationBar';
import Footer from './Footer';
import "./BadGiftCard.css";

class DashBoardPage extends React.Component {
    constructor(){
      super();
        this.state = {
          userName: ''
        }
      }
  
    render() {
      return (
        <div>
         <NavigationBar/>
         <p className='text'>Hello user! Welcome to Hy-Vee's new web application.</p>
         <p className='text'>You can generate your reporting sheet in just a click! Enter the details below and hit submit!</p>
         <BadGiftCardReportingForm/>
         <Footer/>
        </div>
      );
    }
  }
  
  export default DashBoardPage;