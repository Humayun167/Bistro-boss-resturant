import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, Img }) => {
  return (
    <div className="pt-8">
           { title && <Cover img={Img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-20 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
