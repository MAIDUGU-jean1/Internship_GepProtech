import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Mail,
  User,
  Phone,
  GraduationCap,
  Calendar,
  BookOpen,
  MessageSquare,
  Send,
  ChevronRight,
  Rocket,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/internshipApplicationPage.css';
import Logo from '../assets/Images/logo.png';

export default function InternshipApplicationPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showCommunityModal, setShowCommunityModal] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    department: '',
    internshipField: '',
    startMonth: '',
    endMonth: '',
    studyLevel: '',
    coverLetter: ''
  });

  const internshipFields = [
    "Data Analysis",
    "Web Development",
    "Basic IT",
    "Video Production",
    "SEO Optimization",
    "App Development",
    "Software Engineering",
    "Cybersecurity",
    "Digital Marketing",
    "Graphic Design",
    "Project Management",
    "Business Intelligence"
  ];

  const studyLevels = [
    "High School",
    "Undergraduate",
    "Graduate",
    "Postgraduate",
    "Other"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowCommunityModal(true);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Only submit when on step 3 (final step)
    if (step !== 3) {
      handleNext();
      return;
    }

    try {
      // Prepare the form data to match backend field names
      const dataToSubmit = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        school: formData.school || null,
        department: formData.department || null,
        internshipField: formData.internshipField || null,
        startMonth: formData.startMonth || null,
        endMonth: formData.endMonth || null,
        studyLevel: formData.studyLevel || null,
        coverletter: formData.coverLetter || null
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/internship-application`,
        dataToSubmit,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.status === 201 || response.status === 200) {
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          school: '',
          department: '',
          internshipField: '',
          startMonth: '',
          endMonth: '',
          studyLevel: '',
          coverLetter: ''
        });
        console.log('Form submitted successfully:', response.data);
        // Show success modal
        setShowCommunityModal(true);
      }
    } catch (error) {
      // Handle errors from backend
      if (error.response) {
        // Backend returned error response
        console.error('Backend error:', error.response.data);
        setError(error.response.data);

        // Display validation errors or server errors
        const errorMessage = error.response.data?.message ||
          'An error occurred while submitting your application.';
        // alert(errorMessage);
      } else if (error.request) {
        // Request sent but no response
        console.error('No response from server:', error.request);
        // alert('Unable to connect to server. Please try again later.');
        setError('Unable to connect to server. Please try again later.');
      } else {
        // Error in request setup
        console.error('Request error:', error.message);
        // alert('An error occurred. Please try again.');
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleJoinCommunity = () => {
    window.open('https://chat.whatsapp.com/https://chat.whatsapp.com/Is89ZEqirol2kQNZM0SSir', '_blank');
    setShowCommunityModal(false);
  };

  const progressPercentage = (step / 3) * 100;

  return (
    <div className="internship-app-wrapper">
      <section className="internship-application-page">
        {/* Header Section */}
        <header className="application-header">
          <div className="container">
            <div className="header-content">
              <div className="logo" onClick={() => navigate('/')}>
                <img src={Logo} alt="GeP ProTech Academy Logo" className='logo' />

                <span className="logo-text">GeP ProTech</span>
                <span className="logo-accent">Academy</span>
              </div>

              <div className="header-badge">
                <span>Join Our E-Learning Program</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="application-main">
          <div className="container">


            {/* Job Card */}
            <div className="job-card">
              <div className="job-header">
                <h2 className="job-title">
                  Internship Application Form
                </h2>
                <p className="job-subtitleame">
                  <ul>
                    <li>Fill the form below to apply for our internship program</li>
                    <li>Ensure all required fields are completed accurately</li>
                    <li>Submit your application and join our community for updates</li>
                    <li> Get email updates about your application status. <br /></li>
                  </ul>
                  {/* Join our WhatsApp community after submission for more Updates */}
                </p>
              </div>

              {/* Application Form */}
              <div className="application-form-container">
                {/* Progress Bar */}
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <div className="progress-steps">
                    <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
                      <div className="step-circle">
                        <span>1</span>
                      </div>
                      <span className="step-label">Personal Info</span>
                    </div>
                    <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
                      <div className="step-circle">
                        <span>2</span>
                      </div>
                      <span className="step-label">Education</span>
                    </div>
                    <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>
                      <div className="step-circle">
                        <span>3</span>
                      </div>
                      <span className="step-label">Final Details</span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="application-form">
                  {error && (
                    <div className="form-error">
                      {typeof error === 'string' ? error : 'An error occurred. Please check your input and try again.'}
                    </div>
                  )}
                  {step === 1 && (
                    <div className="form-step active">
                      <h3 className="step-title">
                        <span className="step-number">01</span>
                        Personal Information
                      </h3>
                      <p className="step-description">
                        Let's start with your basic information
                      </p>

                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="name">
                            <User size={18} />
                            <span>Full Name *</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">
                            <Mail size={18} />
                            <span>Email Address *</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="phone">
                            <Phone size={18} />
                            <span>Phone Number *</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="form-step active">
                      <h3 className="step-title">
                        <span className="step-number">02</span>
                        Education & Background
                      </h3>
                      <p className="step-description">
                        Tell us about your educational background
                      </p>

                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="school">
                            <GraduationCap size={18} />
                            <span>School/University *</span>
                          </label>
                          <input
                            type="text"
                            id="school"
                            name="school"
                            value={formData.school}
                            onChange={handleInputChange}
                            placeholder="Enter your school/university name"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="department">
                            <BookOpen size={18} />
                            <span>Department *</span>
                          </label>
                          <input
                            type="text"
                            id="department"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                            placeholder="Enter your department"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="studyLevel">
                            <GraduationCap size={18} />
                            <span>Level of Studies *</span>
                          </label>
                          <select
                            id="studyLevel"
                            name="studyLevel"
                            value={formData.studyLevel}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select your level</option>
                            {studyLevels.map((level, index) => (
                              <option key={index} value={level}>{level}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="form-step active">
                      <h3 className="step-title">
                        <span className="step-number">03</span>
                        Internship Details
                      </h3>
                      <p className="step-description">
                        Finalize your internship preferences
                      </p>

                      <div className="form-grid">
                        <div className="form-group">
                          <label htmlFor="internshipField">
                            <BookOpen size={18} />
                            <span>Field of Internship *</span>
                          </label>
                          <select
                            id="internshipField"
                            name="internshipField"
                            value={formData.internshipField}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select your preferred field</option>
                            {internshipFields.map((field, index) => (
                              <option key={index} value={field}>{field}</option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group">
                          <label htmlFor="startMonth">
                            <Calendar size={18} />
                            <span>Preferred Start Month *</span>
                          </label>
                          <input
                            type="month"
                            id="startMonth"
                            name="startMonth"
                            value={formData.startMonth}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="endMonth">
                            <Calendar size={18} />
                            <span>Preferred End Month *</span>
                          </label>
                          <input
                            type="month"
                            id="endMonth"
                            name="endMonth"
                            value={formData.endMonth}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="form-group full-width">
                          <label htmlFor="coverLetter">
                            <MessageSquare size={18} />
                            <span>Cover Letter (Optional)</span>
                          </label>
                          <textarea
                            id="coverLetter"
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleInputChange}
                            placeholder="Tell us why you're interested in this internship, your goals, and what you hope to learn..."
                            rows="5"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="form-actions">
                    {step > 1 && (
                      <button
                        type="button"
                        className="btn btn-secondary prev-btn"
                        onClick={handlePrevious}
                      >
                        <ArrowLeft size={18} />
                        Previous Step
                      </button>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary next-btn"
                    >
                      {step === 3 ? (
                        <>
                          <Send size={18} />
                          Submit Application
                        </>
                      ) : (
                        <>
                          Next Step
                          <ArrowRight size={18} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Side Info */}
            <div className="application-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-header">
                  <Rocket size={24} />
                  <h3>Why Apply With Us?</h3>
                </div>
                <ul className="sidebar-list">
                  <li> Real-world project experience</li>
                  <li> Expert mentorship & guidance</li>
                  <li> Career growth opportunities</li>
                  <li> Industry-recognized certification</li>
                  <li> Networking with professionals</li>
                  <li> Portfolio-building projects</li>
                </ul>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-header">
                  <CheckCircle size={24} />
                  <h3>Application Tips</h3>
                </div>
                <ul className="sidebar-list">
                  <li>✓ Complete all required fields</li>
                  <li>✓ Double-check contact information</li>
                  <li>✓ Be specific about your interests</li>
                  <li>✓ Highlight relevant experience</li>
                  <li>✓ Submit before the deadline</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="application-footer">
          <div className="container">
            <div className="footer-content">
              <p>© {new Date().getFullYear()} GeP ProTech Academy. All rights reserved.</p>
              <button
                className="back-home-btn"
                onClick={() => navigate('/')}
              >
                ← Back to Home
              </button>
            </div>
          </div>
        </footer>

        {/* Community Modal */}
        {showCommunityModal && (
          <div className="community-modal-overlay">
            <div className="community-modal">
              <button
                className="close-modal"
                onClick={() => setShowCommunityModal(false)}
              >
                <X size={24} />
              </button>

              <div className="modal-content">
                <div className="modal-icon">
                  <CheckCircle size={64} />
                </div>

                <h2>Application Submitted! </h2>

                <p className="modal-message">
                  Thank you for applying to our internship program. Your application
                  has been received and our team will review it shortly.
                </p>


                <div className="modal-cta">
                  <h3>Join Our Community</h3>
                  <p>
                    Connect with fellow applicants, get updates, and network with
                    industry professionals in our WhatsApp community.
                  </p>

                  <div className="modal-buttons">
                    <button
                      className="btn btn-primary join-btn"
                      onClick={handleJoinCommunity}
                    >
                      Join WhatsApp Community
                    </button>

                    <button
                      className="btn btn-secondary close-btn"
                      onClick={() => setShowCommunityModal(false)}
                    >
                      Return Home
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};