import React from 'react';
import './CardPopup.scss';

const CardPopup = ({ value, onClickClose }) => {
  return (
    <div className="popup" onClick={onClickClose}>
      <div className="popup__container" onClick={(evt) => evt.stopPropagation()}>
        <button className="popup__close" onClick={onClickClose}>&#9587;</button>
        <h2 className="popup__title">{value.name}</h2>
        <div className="popup__info">
          <div className="popup__info-block">
            <span className="popup__info-block-text">Телефон:</span>
            <span className="popup__info-block-text">Почта:</span>
            <span className="popup__info-block-text">Дата приёма:</span>
            <span className="popup__info-block-text">Должность:</span>
            <span className="popup__info-block-text">Подразделение:</span>
          </div>
          <div className="popup__info-block popup__info-block_right">
            <span className="popup__info-block-text popup__info-block-text_line">{value.phone}</span>
            <span className="popup__info-block-text popup__info-block-text_line">{value.email}</span>
            <span className="popup__info-block-text">{value.hire_date}</span>
            <span className="popup__info-block-text">{value.position_name}</span>
            <span className="popup__info-block-text">{value.department}</span>
          </div>
        </div>
        <div className="popup__addition">
          <span className="popup__addition-title">Дополнительная информация:</span>
          <p className="popup__addition-text">Разработчики используют текст Lorem ipsum в качестве заполнителя макета страницы. Так как дополнительной информации в JSON нет, а адрес нигде не используется, закинул его сюда: {value.address}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPopup;
