import React from 'react';
import './SuccessPage.css';

class SuccessPage extends React.Component {
    render() {
        return (
            <div className="wrapper">
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
                        <button>LOGOUT</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SuccessPage;