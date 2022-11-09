import React, { Component } from "react";
import styles from "./Content.module.css";
import b from "../img/b.jpg";
import c from "../img/c.jpg";
class Content extends Component {
  state = {
    0:{
    name: 'borat' ,
    description:'dwdwed',
    img : b
    },
    1:{
      name:'Parma',
      description:'dewd',
      img :c
    }
  };

  getItem = () =>{
    var curr = this.props.current_item === 0 ? this.state[0] : this.state[1];
    return curr 
  }

  render() {
    return <div className={styles.container}>
      <img src ={this.getItem().img} className={styles.img}></img>
      <div className={styles.text}>{this.getItem().name}</div>
    </div>;
  }
}

export default Content;
