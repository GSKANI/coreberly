import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Enroll.css';

const Enroll = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const courseName = location.state?.courseName || 'General Enrollment';

    const [formData, setFormData] = useState({
        // Basic Profile
        fullName: '',
        email: '',
        phone: '',
        dob: '',

        // Academic Background
        college: '',
        degree: '',
        year: '',
        skills: '',

        // Internship Specifics
        role: '',
        startDate: '',
        endDate: '',
        portfolio: '',

        // Files (placeholders for state)
        profilePic: null,
        collegeId: null,
        resume: null,
        idProof: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({ ...prev, [name]: files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        console.log('Enrollment Data:', formData);
        alert('Enrollment Application Submitted Successfully!');
        navigate('/');
    };

    return (
        <div className="enroll-page">
            <motion.div
                className="enroll-container"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="enroll-header">
                    <h2>Student Enrollment Form</h2>
                    <div className="course-badge">Applying for: {courseName}</div>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="form-grid">
                        {/* Basic Info */}
                        <div className="form-group full-width">
                            <label>Full Name</label>
                            <input type="text" name="fullName" placeholder="As per official records" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="tel" name="phone" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Date of Birth</label>
                            <input type="date" name="dob" required onChange={handleChange} />
                        </div>
                        <div className="form-group full-width">
                            <label>Profile Picture</label>
                            <div className="file-upload-box">
                                <input type="file" name="profilePic" accept="image/*" className="file-input" onChange={handleFileChange} />
                                <span className="upload-icon">📷</span>
                                <span className="upload-label">{formData.profilePic ? formData.profilePic.name : 'Upload Photo'}</span>
                            </div>
                        </div>

                        {/* Academic Info */}
                        <div className="form-group full-width">
                            <label>College / University</label>
                            <input type="text" name="college" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Degree & Major</label>
                            <input type="text" name="degree" placeholder="e.g. B.Tech IT" required onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Current Year / Semester</label>
                            <input type="text" name="year" placeholder="e.g. 3rd Year" required onChange={handleChange} />
                        </div>

                        {/* Role & Portfolio */}
                        <div className="form-group">
                            <label>Internship Role</label>
                            <select name="role" onChange={handleChange}>
                                <option value="">Select Role</option>
                                <option value="frontend">Frontend Developer</option>
                                <option value="backend">Backend Developer</option>
                                <option value="fullstack">Full Stack Developer</option>
                                <option value="uiux">UI/UX Designer</option>
                                <option value="datascience">Data Scientist</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Portfolio Link</label>
                            <input type="url" name="portfolio" placeholder="https://" onChange={handleChange} />
                        </div>

                        {/* Documents */}
                        <div className="form-group">
                            <label>College ID Card (Scan)</label>
                            <div className="file-upload-box">
                                <input type="file" name="collegeId" className="file-input" onChange={handleFileChange} />
                                <span className="upload-icon">🆔</span>
                                <span className="upload-label">{formData.collegeId ? formData.collegeId.name : 'Upload ID'}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Identity Proof (Aadhaar/PAN)</label>
                            <div className="file-upload-box">
                                <input type="file" name="idProof" className="file-input" onChange={handleFileChange} />
                                <span className="upload-icon">💳</span>
                                <span className="upload-label">{formData.idProof ? formData.idProof.name : 'Upload Proof'}</span>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">Submit Application</button>
                </form>
            </motion.div>
        </div>
    );
};

export default Enroll;
