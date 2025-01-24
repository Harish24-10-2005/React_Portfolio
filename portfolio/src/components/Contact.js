import React, { useState } from 'react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is not valid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            console.log('Form submitted:', formData);
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Contact Us</h2>
            {submitted && <p style={styles.success}>Thank you for reaching out!</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.name && <p style={styles.error}>{errors.name}</p>}
                </div>
                <div style={styles.formGroup}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={styles.input}
                    />
                    {errors.email && <p style={styles.error}>{errors.email}</p>}
                </div>
                <div style={styles.formGroup}>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={styles.textarea}
                    ></textarea>
                    {errors.message && <p style={styles.error}>{errors.message}</p>}
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>
            
            <div style={styles.socialLinks}>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" style={styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" style={styles.icon} />
                </a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={styles.icon} />
                </a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    },
    heading: {
        color: '#333'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formGroup: {
        marginBottom: '15px',
        width: '100%',
        textAlign: 'left'
    },
    input: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px'
    },
    textarea: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        height: '100px'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    },
    error: {
        color: 'red',
        fontSize: '14px',
        marginTop: '5px'
    },
    success: {
        color: 'green',
        fontSize: '16px',
        textAlign: 'center'
    },
    socialLinks: {
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
    },
    icon: {
        width: '40px',
        height: '40px',
        cursor: 'pointer'
    }
};

export default ContactPage;
