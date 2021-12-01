import React from "react";


export const FooterSection = () => {
  return (
    <footer id="pageFooter">
      <form action="/" method="post" className="search-form">
        <label htmlFor="search">Looking for something? </label>
        <input
          type="search"
          placeholder="Search"
          title="Search"
          className="q"
          name="search"
          id="search"
        />
        <input type="submit" className="submit" value="Go" name="submit" />
      </form>
      <p className="notice">&copy; 2021 Techboost.com</p>
    </footer>
  );
};
