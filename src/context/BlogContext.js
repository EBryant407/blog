import React, { useState } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPost, setBlogPosts] = useState([]);

    const addBlogPosts = () => {
        setBlogPosts([...blogPost, { title: `Blog Post #${blogPost.length +1}` }]);
    };

    return (
        <BlogContext.Provider value={{ data: blogPost, addBlogPosts }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;