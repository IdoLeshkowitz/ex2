import styles from "./Header.module.css";
import React, { Component } from 'react';
import userImg from "../img/a.jpg";
import classNames from "classnames";

class Header extends Component {
    state = {
     } 
    menuVisibleHandler = () =>{
        var classNames = require('classnames');
        return classNames({[styles.btn_hidden] : !this.isShowingSomething() } ,styles.btn ); 
    }
    isShowingSomething = () => {
        return this.props.showingSomething
    }
    render() { 
        return (<div className={styles.container}>
            <button className={this.menuVisibleHandler()} onClick={this.props.onMovieClicked}>movie</button>
            <img className={styles.user} src = {userImg}></img>
            <button className={this.menuVisibleHandler()} onClick={this.props.onPlaceClicked}><span>place</span></button>
            
        </div>);
    }
}
 
export default Header;