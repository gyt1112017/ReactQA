import Card from './Card.js';

function BlogList(props) {


    const blogList = props.blogs.map( blog => {
        return (
            <Card key={blog.id}>
                <div>ID: {blog.id}</div>
                <div><b>Title:</b>  {blog.title} </div>
                <div>Author: {blog.author}</div>
                <div>Body:   {blog.body}  </div>
                <button onClick={()=>props.deleteBlog(blog.id)}>Delete</button>
            </Card>
        )
    });


    return blogList;
}
export default BlogList;