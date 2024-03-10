/* eslint-disable react/prop-types */

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1 className="name">
        {" "}
        Name: <span className="name1">{name}</span>
      </h1>
      <img src={icon} />
      <h2 className="price">
        {" "}
        Price: $ <span className="price1">{price}</span>
      </h2>
      <h3 className="symbol"> Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
