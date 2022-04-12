import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import Cog from '@layouts/Cog';
import Asset from '@layouts/Asset';

const Main = ()=>{
    ///main/:type
    //:type는 cog, assets으로 분리됨
    return(
        <div>
            {/* Header */}
            <header>편한 가계부</header>
            <nav>
                <ul>
                    <li> <Link to={"/main/cog"}>장부</Link></li>
                    <li> <Link to={"/main/asset"}>자산</Link> </li>
                </ul>
            </nav>
            {/* 장부 or 자산 */}
            <Switch>
                <Route path="/main/cog" component={Cog} />
                <Route path="/main/asset" component={Asset} />
            </Switch>

            메인 여기서 라우팅된다.
        </div>
    )
}

export default Main;