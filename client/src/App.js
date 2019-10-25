import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Books />
    </div>
  );
}

export default App;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// import Nav from "./components/Nav";

// import Jumbotron from "./components/Jumbotron";

// import Search from "./pages/Search";
// // import Saved from "./pages/Saved";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Nav />
//           <Jumbotron>
//             <h1>Google Books</h1>
//             <h4>Start searching for your favorite books!</h4>
//           </Jumbotron>

//           <Route exact path="/" component={Search} />
//           <Route exact path="/search" component={Search} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
