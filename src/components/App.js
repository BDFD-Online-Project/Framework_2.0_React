import React from "react";
import Countdown from "./Countdown/";
// import Test from './Test';

/* the class component is slower than function component
   and we can switch with those two mode 
export class App extends Component {
  render() {
    return <Countdown />;
  }
}
*/

const App = (props) => <Countdown />;

export default App;
