import './App.css';
import Blogs from './Blogs';
import NewBlog from './NewBlog';
import QAPics from './QAPics';
import NotFound from './NotFound';
import MainNavigation from './MainNavigation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <MainNavigation /> {/* Navigation bar at the top */}
      <div>
        <Routes>
          <Route path="/" element={<Blogs />} /> {/* Route for the All Blogs page */}
          <Route path="/new-blog" element={<NewBlog />} />
          <Route path="/new" element={<NewBlog />} />
          <Route path="/qa/pics/:id" element={<QAPics />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
