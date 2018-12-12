import React from 'react';
import "./BadGiftCard.css";

class BadGiftCard extends React.Component {

    render() {
        return (
            <div className='giftCardReportingForm'>
                <h2 className='giftCardTitle'>BAD GIFT CARD REPORTING FORM</h2>
                <div className='inputWrapper'>
                    <input className='textBox' type='text' placeholder='Store ID' />
                    <input className='textBox' type='text' placeholder='Store Name' />
                    <input className='textBox' type='text' placeholder='Bad Gift Card No.' />
                    <input type='button' value='SUBMIT' onClick={this.props.handleOnSubmit} />
                </div>
            </div>
        );
    }
    
}

export default BadGiftCard;