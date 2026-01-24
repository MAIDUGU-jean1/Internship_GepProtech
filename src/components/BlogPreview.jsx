import React from 'react';
import { Calendar, User, ArrowRight, FileText, TrendingUp, Code } from 'lucide-react';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development in 2024",
      excerpt: "Explore emerging trends and technologies shaping the future of web development.",
      author: "Sarah Chen",
      date: "Mar 15, 2024",
      category: "Development",
      readTime: "5 min read",
      icon: <Code size={24} />
    },
    {
      title: "Breaking Into Cybersecurity: A Beginner's Guide",
      excerpt: "Essential steps and resources to start your career in cybersecurity.",
      author: "Marcus Johnson",
      date: "Mar 10, 2024",
      category: "Security",
      readTime: "7 min read",
      icon: <FileText size={24} />
    },
    {
      title: "Why Data Skills Are the New Digital Literacy",
      excerpt: "Understanding why data analysis skills are becoming essential in every industry.",
      author: "Dr. Lisa Wang",
      date: "Mar 5, 2024",
      category: "Data Science",
      readTime: "6 min read",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <section id="blog" className="section blog-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Insights & Updates</span>
          <h2 className="section-title">Latest From Our Blog</h2>
          <p className="section-description">
            Stay updated with industry trends, success stories, and expert advice 
            from our community of tech professionals and educators.
          </p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-card">
              <div className="blog-card-header">
                <div className="post-category">
                  {post.icon}
                  <span>{post.category}</span>
                </div>
                <div className="post-meta">
                  <div className="meta-item">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="read-time">{post.readTime}</span>
                  <button className="read-more-btn">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest internship opportunities and tech insights.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="email-input"
              />
              <button type="submit" className="btn btn-primary subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .blog-section {
          background-color: var(--bg-light);
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .blog-card {
          background-color: var(--card-light);
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
        }
        
        .blog-card-header {
          padding: 1.5rem 1.5rem 0;
        }
        
        .post-category {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .post-category span {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 0.9rem;
        }
        
        .post-meta {
          display: flex;
          gap: 1.5rem;
          color: var(--text-light);
          opacity: 0.8;
          font-size: 0.9rem;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .blog-card-content {
          padding: 1.5rem;
        }
        
        .blog-card-content h3 {
          margin-bottom: 1rem;
          color: var(--secondary-color);
          font-size: 1.3rem;
          line-height: 1.4;
        }
        
        .post-excerpt {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        
        .post-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .read-time {
          color: var(--text-light);
          opacity: 0.7;
          font-size: 0.9rem;
        }
        
        .read-more-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--primary-color);
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .read-more-btn:hover {
          gap: 0.8rem;
        }
        
        .newsletter-section {
          background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
          border-radius: var(--border-radius);
          padding: 3rem;
          color: white;
        }
        
        .newsletter-content {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        
        .newsletter-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .newsletter-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }
        
        .newsletter-form {
          display: flex;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .email-input {
          flex: 1;
          padding: 1rem;
          border: none;
          border-radius: var(--border-radius);
          font-size: 1rem;
        }
        
        .subscribe-btn {
          white-space: nowrap;
        }
        
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
          
          .newsletter-form {
            flex-direction: column;
          }
          
          .newsletter-section {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BlogPreview;