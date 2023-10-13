import './App.css'
import RootLayout from './Layouts/RootLayout';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home'
import BeVroomer from './Pages/BeVroomer';
import RiderWithUs from './Pages/Rider';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="joinVroom" element={<BeVroomer />} />
      <Route path="contact" element={<Contact />} />
      <Route path="rider" element={<RiderWithUs />} />
    </Route>
  )
);

function App() {
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}
export default App

