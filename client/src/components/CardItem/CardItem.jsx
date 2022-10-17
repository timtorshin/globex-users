import React from 'react';
import './CardItem.scss';
import phoneIcon from '../../assets/phone-icon.png';
import emailIcon from '../../assets/email-icon.png';

const CardItem = ({ value }) => {
  return (
    <>
      <div className="card">
        <h2 className="card__title">{value.name}</h2>
        <div className="card__info">
          <div className="card__info-item">
            <img className="card__info-item-icon" src={phoneIcon} alt="Phone Icon" />
            <span className="card__info-item-text">{value.phone}</span>
          </div>
          <div className="card__info-item">
            <img className="card__info-item-icon" src={emailIcon} alt="Email Icon" />
            <span className="card__info-item-text card__info-item-text_line">{value.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
