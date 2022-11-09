import React, { Component } from 'react';
import Content from './Content';
import ContentMenu from './contentMenu';
import contentMenu from './contentMenu';
class Body extends Component {
    state = {  } 
    
      movieClickedHandler = () => {
        this.props.onMovieClicked();
      }
    getCurrentBody = () =>{
        return this.props.showingSomething === true ? <div>'true</div> : <div>false</div>;
        var curr = this.props.showingSomething === true ? <Content /> : <ContentMenu onMovieClicked = {this.movieClickedHandler} /> ;
        return curr ;
    }
    render() { 
        return (this.getCurrentBody());
        
    }
}
 
export default Body;