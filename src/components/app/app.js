import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Menu from '../menu';
import GalleryList from '../gallery-list';
import ImageView from '../image-view';
import FullScreen from '../pages/fullscreen';

import './app.css';

export default class App extends Component {

  state = {
    selectedImage: null,
    searchTerms: 'fashion, style'
  };


  selectImage = (img) => {
    this.setState({
      selectedImage: img
    });
  };

  onSearchTermChange = (keywoards) => {
    this.setState({
      searchTerms: keywoards
    });
  };

  render() {

    const { selectedImage, searchTerms } = this.state;


    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div className="gallery-app">
              <Menu />
              <GalleryList onSearchTermChange={this.onSearchTermChange} searchTerms={searchTerms} selectImage={this.selectImage} />
              <ImageView selectImage={this.selectImage} selectedImage={selectedImage} />
            </div>
          </Route>
          <Route path="/fullscreen" component={FullScreen} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
