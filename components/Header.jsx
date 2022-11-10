import HeaderStyles from "../styles/Header.module.css";

function Header() {
  const x = 4;

  return (
    <div>
      <h1 className={HeaderStyles.title}>
        <span>Web Development</span> News
      </h1>
      <p className={HeaderStyles.description}>
        Keep Up to date with the latest and greatest web dev news from across
        the globe
      </p>
    </div>
  );
}

export default Header;
