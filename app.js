/**
 * Created by chenbei on 16/1/30.
 */
import React from 'react'
import {render} from 'react-dom'

import {browserHistory, Router, Route, IndexRoute,Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TestSlider from 'firstPage/index.jsx';
import "./public.css";


let history=[];

class App extends React.Component {
    constructor(){
        super();
    }
    /*
    * 返回时采用不一样的页面跳转动画
    * */
    handler(){
        let currentHash=this.props.location.pathname;
        let historyLen=history.length;
        if(historyLen > 1 &&history[historyLen-2]==currentHash){
            history.pop();
            return true;
        }else{
            history.push(currentHash);
            return false;
        }
    }

    render() {
        console.log(this.props.children);
        console.log(this.props.location.pathname);
        return (
            <div onclick={this.test}>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName={this.handler()?"sliderOut":"slider"}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}

/*
* 懒加载文件
* */
const loadContainerAsync = bundle => (location, cb) => {
    bundle(component => {
        cb(null, component);
    });
};

render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={TestSlider}/>
            <Route path="page1" getComponent={loadContainerAsync(require('bundle?lazy!./self_modules/page1/index.jsx'))} />
            <Route path="page2" getComponent={loadContainerAsync(require('bundle?lazy!./self_modules/page2/index.jsx'))} />
        </Route>
    </Router>,
    document.getElementById("main")
);
