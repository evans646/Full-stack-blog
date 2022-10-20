import { render} from '@testing-library/react';
import '@testing-library/jest-dom';
import {Header} from './Nav2';



test('It returns a header element ', () => {
    const {getByText}  =  render(<Header />);
    const h1 = getByElement(<header></header>);
    expect(h1).render(<header id="pageHeader">
    <hgroup>
        <h3 className='logo'>
        </h3>
      <h1>ech<span className='header-title'>A</span>rena</h1>
        <h2>Technology made simple</h2>
    </hgroup>
   </header>)
});

