// import { Routes,Route } from "react-router-dom";
// import Content from "./Content";
import { Employees } from "./Employees";
import Footer from "./Footer";
import Header from "./Header";
// import {Employees} from "./Employees";
// import {GroupedTeamMembers} from "./GroupedTeamMembers";
// import {Nav} from "./Nav";



function App() {
  return (
    
    <div className="App">
      <div>
    <Header/>
    <Employees/>
    <Footer/>
      </div>
    
     
       </div>

      
   
   
  );
}

export default App;

{/* <Nav/>
      <Routes>
      
      <Route path="/" element={<Employees/>}>Employees</Route>
      <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers/>}>Grouped Team Members</Route>
      </Routes> */}
