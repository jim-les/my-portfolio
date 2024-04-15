import React, { useState } from 'react';
import './Style.css';
import WineImage from '../assets/img-3.png';

const ThankYouModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="thankyou_container">
            <button onClick={openModal}>Buy Me a Coffee</button>

            {modalOpen && (
                <div id="myModal" className="modal">
                    <div className="inner-modal">
                        <div className="model_content">
                            <div className="content-img">
                                <img src={WineImage} alt="" />
                            </div>
                            <div className="wrapper-1">
                                <div className="wrapper-upper">
                                    <span className="close" onClick={closeModal}>
                                        <svg fill="#aaa" xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 384 512">
                                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                        </svg>
                                    </span>
                                </div>
                                <div className="wrapper-2">
                                    <h1>Thank you!</h1>
                                    <p className="content-upper">
                                        Thank you for deciding to buy me a coffee.
                                        <br />
                                        Phone: <a href="">+254113159363</a> <br />
                                        Paypall: <a href="">jimlestonosoi42@gmail.com</a>
                                    </p>
                                    <a href="mpesa://" className='mpesaBtn'>Pay with M-Pesa</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ThankYouModal;
