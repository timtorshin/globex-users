import React from 'react';
import './CardItem.scss';
import CardPopup from '../CardPopup/CardPopup';
import phoneIcon from '../../assets/phone-icon.png';
import emailIcon from '../../assets/email-icon.png';

const CardItem = ({ value }) => {
  const [isCardOpen, setIsCardOpen] = React.useState(false);

  return (
    <>
      <div className="card" onClick={() => setIsCardOpen(true)}>
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
      {
        isCardOpen ? <CardPopup value={value} onClickClose={() => setIsCardOpen(false)} /> : null
      }
    </>
  );
};

export default CardItem;
