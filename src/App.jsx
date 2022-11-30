
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Tasks from './Components/Tasks'
import Joke from './Components/Joke'
import Pro from './Components/Pro'

function App() {

 


  return (

    

    <div className="todo">

      {/* <Header /> */}
      <Tasks />
      <Tasks />
      <Tasks />
      <Tasks />
      <Pro />


        

    </div>

    
  );
}

// class App extends React.Component {
//   render () {
//     return (
//       <div>
//       <Tasks />
//       <Tasks />
//       <Tasks />
//       <Tasks />
//       </div>
//     )
//   }
// }

export default App;
