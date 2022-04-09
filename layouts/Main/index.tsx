import React from "react";
import { Route, Switch } from "react-router";

const Main = ()=>{
    ///main/:type
    //:type는 cog, assets으로 분리됨
    return(
        <div>
            {/* Header */}
            
            {/* 지출 or 수입 */}
            <Switch>
                
            </Switch>

            {/* 지출 or 수입 or 이체 */}
            <Switch>

            </Switch>

            메인 여기서 라우팅된다.
        </div>
    )
}

export default Main;