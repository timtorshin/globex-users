import React from 'react';
import './CardList.scss';
import CardItem from '../CardItem/CardItem';
import searchIcon from '../../assets/search-icon.png';

const CardList = () => {
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const getItems = () => {
    fetch('http://127.0.0.1:3000')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.log(error));
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="cards">
      <form className="cards__search">
        <input
          className="cards__search-input"
          type="text"
          onChange={(evt) => setSearchValue(evt.target.value)}
        />
        <img className="cards__search-icon" src={searchIcon} alt="SearchIcon" />
      </form>
      <div className="cards__list">
        {
          filteredItems.map((item, index) => (
            <CardItem value={item} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default CardList;
