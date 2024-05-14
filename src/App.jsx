import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Update from "./Update";
import RecEdit from "./RecEdit";
import Search from "./Search";

const App=()=>{
  return(
    <>
    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="myedit/:id" element={<RecEdit/>}/>
    <Route path="search" element={<Search/>}/>

    
    </Route>
    
    </Routes>
    </BrowserRouter>

    </>
  ) 
}
export default App;
