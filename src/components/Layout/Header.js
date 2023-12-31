import candyImage from "../../assets/candy.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Candy Cravers</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={candyImage} alt="Delicious food!" />
      </div>
    </>
  );
};

export default Header;
