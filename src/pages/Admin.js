import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
      setLoginData({ email: '', password: '' });
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <div className="login-box">
          <div className="login-header">
            <h1>🔐 Admin Dashboard</h1>
            <p>Login to manage your website</p>
          </div>

          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                placeholder="admin@coreberly.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="login-button">Sign In</button>
          </form>

          <p className="login-note">Demo: Use any email/password to login</p>
        </div>
      </div>
    );
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <button onClick={() => setIsLoggedIn(false)} className="logout-btn">Logout</button>
      </div>

      <div className="admin-content">
        <aside className="admin-sidebar">
          <ul className="admin-menu">
            <li>
              <button
                className={`menu-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                📊 Dashboard
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeTab === 'services' ? 'active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                💼 Services
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeTab === 'projects' ? 'active' : ''}`}
                onClick={() => setActiveTab('projects')}
              >
                🎯 Projects
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => setActiveTab('blog')}
              >
                📝 Blog Posts
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeTab === 'contacts' ? 'active' : ''}`}
                onClick={() => setActiveTab('contacts')}
              >
                💬 Contacts
              </button>
            </li>
            <li>
              <button
                className={`menu-item ${activeTab === 'team' ? 'active' : ''}`}
                onClick={() => setActiveTab('team')}
              >
                👥 Team
              </button>
            </li>
          </ul>
        </aside>

        <main className="admin-main">
          {activeTab === 'dashboard' && (
            <section className="admin-section">
              <h2>Dashboard Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <div className="stat-content">
                    <h3>500+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">👥</div>
                  <div className="stat-content">
                    <h3>150+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📝</div>
                  <div className="stat-content">
                    <h3>25</h3>
                    <p>Blog Posts</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💬</div>
                  <div className="stat-content">
                    <h3>12</h3>
                    <p>New Messages</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === 'services' && (
            <section className="admin-section">
              <h2>Manage Services</h2>
              <button className="add-button">+ Add New Service</button>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Web Development</td>
                    <td>Custom web applications</td>
                    <td>$5,000</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                  <tr>
                    <td>Mobile Apps</td>
                    <td>Native mobile applications</td>
                    <td>$8,000</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                  <tr>
                    <td>UI/UX Design</td>
                    <td>Beautiful user interfaces</td>
                    <td>$3,000</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {activeTab === 'projects' && (
            <section className="admin-section">
              <h2>Manage Projects</h2>
              <button className="add-button">+ Add New Project</button>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>E-Commerce Platform</td>
                    <td>Web</td>
                    <td><span className="badge success">Completed</span></td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                  <tr>
                    <td>Fitness Tracking App</td>
                    <td>Mobile</td>
                    <td><span className="badge success">Completed</span></td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {activeTab === 'blog' && (
            <section className="admin-section">
              <h2>Manage Blog Posts</h2>
              <button className="add-button">+ Write New Post</button>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Future of Web Development</td>
                    <td>Sarah Designer</td>
                    <td>2024-01-15</td>
                    <td><span className="badge success">Published</span></td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                  <tr>
                    <td>Best Practices for React</td>
                    <td>John Developer</td>
                    <td>2024-01-12</td>
                    <td><span className="badge success">Published</span></td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {activeTab === 'contacts' && (
            <section className="admin-section">
              <h2>Contact Messages</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>john@example.com</td>
                    <td>Project Inquiry</td>
                    <td><span className="badge warning">New</span></td>
                    <td><button className="edit-btn">Reply</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                  <tr>
                    <td>Jane Smith</td>
                    <td>jane@example.com</td>
                    <td>Support Request</td>
                    <td><span className="badge info">Read</span></td>
                    <td><button className="edit-btn">Reply</button> <button className="delete-btn">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}

          {activeTab === 'team' && (
            <section className="admin-section team-management">
              <div className="section-header-admin">
                <h2>Manage Team Members</h2>
                <button className="add-button">+ Add Team Member</button>
              </div>
              <table className="admin-table neon-table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Position</th>
                    <th>Status</th>
                    <th>Last Active</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-red">CK</span> Charann K S</div></td>
                    <td>Founder & CEO</td>
                    <td><span className="badge neon-success">Active</span></td>
                    <td>2 mins ago</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-orange">SK</span> Kani.G.S</div></td>
                    <td>Co-Founder & CTO</td>
                    <td><span className="badge neon-success">Active</span></td>
                    <td>5 mins ago</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-blue">KK</span> Kishore Kumar</div></td>
                    <td>Lead Frontend</td>
                    <td><span className="badge neon-success">Active</span></td>
                    <td>Just now</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-purple">RS</span> Reshma Shanmugam</div></td>
                    <td>Frontend Engineer</td>
                    <td><span className="badge neon-success">Active</span></td>
                    <td>1 hour ago</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-cyan">P</span> Pavithra</div></td>
                    <td>Backend Engineer</td>
                    <td><span className="badge neon-info">Away</span></td>
                    <td>3 hours ago</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                  <tr>
                    <td><div className="admin-member"><span className="initial-circle neon-green">V</span> Vignesh</div></td>
                    <td>AI Prompt Engineer</td>
                    <td><span className="badge neon-success">Active</span></td>
                    <td>15 mins ago</td>
                    <td><button className="edit-btn">Edit</button> <button className="delete-btn">Remove</button></td>
                  </tr>
                </tbody>
              </table>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
