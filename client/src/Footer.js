import React from 'react';


export const Footer = () => {

    return (
        <div id="container">
            <footer id="pageFooter">
                <form>
                    <label htmlFor="search">Looking for something?</label>
                    <input type="search" placeholder="Search" title="Search" className="q" name="search" id="search" />
                    <input type="submit" className="submit" value="Go" name="submit" />
                </form>
                <p className="twitter"><a href="http://www.twitter.com/jameswillweb">twitter</a></p>
                <p className="notice">&copy; 2021 techboost.com All rights reserved</p>
                <div id="quick-nav">
                   <label htmlFor="search">Quick nav</label>
                </div>
            </footer>
        </div>
    );
};


