import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';


class TestSlider extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="page">
                <div>
                    <h1>{`Page Slider text`}</h1>

                    <button>
                        <Link to="/page1">Page 1</Link>
                    </button>
                </div>
            </div>
        );
    }
}
export default TestSlider;