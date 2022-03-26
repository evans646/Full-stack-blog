import React from 'react';
import ScrollToTop from "react-scroll-to-top";


import { AppRoutes } from '../Routes';

export function App() {
    return ( 
        <div>
        <ScrollToTop smooth/>
            <AppRoutes/>
        </div>
     );
}

