import React from "react";
import SearchInput from './searchInput';
import axios from 'axios';
import ImageList from './imageList';

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = { images: [] }

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=33781033-801561e0de274eca44780a402&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits)

    this.setState({images: response.data.hits})
  }

  render(){
    return( 
      <div className="ui container" style={{marginTop:'30px'}}>
        <SearchInput onSearchSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} />
      </div>
      )
  }
}

export default App;
