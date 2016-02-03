import React from 'react';
import {render} from 'react-dom'
import {Link} from 'react-router'


class Page1 extends React.Component{
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                <Link to="/page2">Page 2</Link>
            </div>
        );
    }
}
export default Page1;