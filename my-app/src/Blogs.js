import './App.css';
import BlogList from './BlogList';
import { useEffect, useState } from 'react';

function Blogs() {
  const [blogs, setBlogs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/blogs')
      .then(res => {
        if (!res.ok) {
          throw Error('Could not get date for that resource.');
        }
        return res.json();
      }).then(data => {
        setBlogs(data);
        setError(null);
        setIsLoading(false);
      }).catch( err => {
        setError(err.message);
      });
  }, []);

  function deleteBlog(id) {
    const newBlogs = blogs.filter(item => item.id !== id);
    setBlogs(newBlogs);
  }

  function deleteHandler(id) {
    fetch('http://localhost:4000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      alert('Deleted!');
      const newBlogs = blogs.filter(item => item.id !== id);
      setBlogs(newBlogs);
    });
  }
  return (
    <div>
      {blogs && <BlogList blogs={blogs} deleteBlog={deleteHandler} />}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
    </div>
  );
}
export default Blogs;

