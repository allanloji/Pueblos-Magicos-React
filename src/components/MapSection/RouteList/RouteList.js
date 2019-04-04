import React from 'react';
import './RouteList.css';
import Route from '../Route/index'

const RouteList = ({routes, towns}) => {

    return(
        <div className="routeListDiv">
            <div className='listRoutesList'>
                {routes.map((route, i) =>
                    <Route key={i} route={route} towns={towns} index={i}/>
                )}
            </div>
        </div>);
};

export default RouteList;
