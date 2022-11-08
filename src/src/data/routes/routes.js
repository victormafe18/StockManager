import React from 'react'
import { Route, Routes } from "react-router";
import StockManagerView from '../../views/StockManagerView';

const Pathing = () => {
    const routesList = [
        {
            path: '/',
            type: 'public',
            view: <StockManagerView/>
        },
        {
            path: '/route1',
            type: 'public',
            view: <StockManagerView/>
        },
    ];

    return (
        <Routes>
            {
                routesList.map((item) => 
                    <Route exact path={item.path} element={item.view}/>
                )
            }
        </Routes>
    )
}

export default Pathing;