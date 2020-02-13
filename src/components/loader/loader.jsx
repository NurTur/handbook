import React from 'react';
import "./loader.less";

function Loader({ loaderText }) {
    return (
        <div className="loadIndicator load8">
            <div className="outer">
                <div className="middle">
                    <div className="inner">
                        <div className="loader" />
                        <div className="text">
                            {loaderText}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Loader;