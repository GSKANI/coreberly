import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Blog.css';

const Blog = () => {
  const [blogs] = useState([
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends shaping web development in 2024',
      author: 'Sarah Designer',
      category: 'Technology',
      date: '2024-01-15',
      image: '🚀',
      readTime: 5
    },
    {
      id: 2,
      title: 'Best Practices for React Development',
      excerpt: 'Tips and tricks for writing clean, efficient React code',
      author: 'John Developer',
      category: 'Development',
      date: '2024-01-12',
      image: '⚛️',
      readTime: 8
    },
    {
      id: 3,
      title: 'UX Design Principles That Matter',
      excerpt: 'Understanding the fundamentals of creating user-centric designs',
      author: 'Emily Designer',
      category: 'Design',
      date: '2024-01-10',
      image: '🎨',
      readTime: 6
    },
    {
      id: 4,
      title: 'Cloud Computing Security Best Practices',
      excerpt: 'How to secure your cloud infrastructure and data',
      author: 'Mike Manager',
      category: 'Security',
      date: '2024-01-08',
      image: '🔒',
      readTime: 7
    },
    {
      id: 5,
      title: 'Mobile App Development Trends',
      excerpt: 'Latest trends and technologies in mobile app development',
      author: 'John Developer',
      category: 'Technology',
      date: '2024-01-05',
      image: '📱',
      readTime: 6
    },
    {
      id: 6,
      title: 'Building Scalable APIs',
      excerpt: 'Designing APIs that can handle growth and complexity',
      author: 'Sarah Designer',
      category: 'Development',
      date: '2024-01-02',
      image: '🔗',
      readTime: 9
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(blogs.map(b => b.category))];

  const filteredBlogs = selectedCategory === 'All'
    ? blogs
    : blogs.filter(b => b.category === selectedCategory);

  return (
    <div className="blog">
      <div className="blog-container">
        <section className="blog-hero">
          <h1>Blog & Insights</h1>
          <p>Stay updated with the latest trends and insights</p>
        </section>

        <section className="blog-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="blog-grid">
          {filteredBlogs.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="blog-image">{post.image}</div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="read-time">{post.readTime} min read</span>
                </div>
                <h3>{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="author-info">
                    <span className="author">{post.author}</span>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <button className="read-more">Read More →</button>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <section className="blog-newsletter">
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest insights and updates delivered to your inbox</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="submit-btn">Subscribe</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Blog;
