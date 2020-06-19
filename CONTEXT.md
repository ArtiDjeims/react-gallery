CONTEXT
--------

<App>
  <Router>
    <Switch>
      <Route path="/" exact>
        <div className="gallery-app">
          <Menu>
            <MenuContent />
          </Menu>
          <GalleryList onSearchTermChange={this.onSearchTermChange} searchTerms={searchTerms} selectImage={this.selectImage}>
            <div className="gallery_list">
              <SearchBlock setToLoading={this.setToLoading} onSearchTermChange={onSearchTermChange} />
              <GalleryBlock />
            </div>
          </GalleryList>
          <ImageView selectImage={this.selectImage} selectedImage={selectedImage} />
        </div>
      </Route>
      <Route path="/fullscreen" component={FullScreen} exact />
      <Redirect to="/" />
    </Switch>
  </Router>
</App>