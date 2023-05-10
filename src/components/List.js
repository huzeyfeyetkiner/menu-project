import Item from "./Item";

function List({ filtered, menu }) {
  let filteredMenu;
  if (filtered === "all") {
    filteredMenu = menu.map((item) => item);
  } else {
    filteredMenu = menu.filter((item) => item.category === filtered);
  }

  return (
    <div className="menu-list">
      {filteredMenu.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
}
export default List;
