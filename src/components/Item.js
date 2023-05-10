function Item({ item }) {
  return (
    <div className="menu-item">
      <div className="img-container">
        <img src={item.img} alt="menu resim" />
      </div>
      <div className="main">
        <div className="title">
          <h4>{item.title}</h4>
          <span>${item.price}</span>
        </div>
        <div className="info">
          <span className="desc">{item.desc}</span>
        </div>
      </div>
    </div>
  );
}
export default Item;
