import React, { Component } from 'react';
import styles from "./contentMenu.module.css";
class ContentMenu  extends Component {
    state = {  }
    render() { 
        return (
            <div className={styles.container}>
                <button className={styles.btn} onClick= {this.props.onMovieClicked}>movie</button>
                <button className={styles.btn}>place</button>
            </div>
        );
    }
}
 
export default ContentMenu;