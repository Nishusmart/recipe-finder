import { Component } from "react";
import Header from "./Header";

class App extends Component {
  render() {
    return (
          <div className="App">
          <Header/>
            <div style={{textAlign:'center',fontFamily:'Maven Pro'}}>
            <h2>
              Type a Dish Name to Search for it's ingredients
            </h2>
            </div>
          </div>
    );
  }
}
export default App;
