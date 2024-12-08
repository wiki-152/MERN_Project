const yup = require('yup');
const userService = require('../services/userService');
const Mailjet = require('node-mailjet');

const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC, // Your API Key
  process.env.MJ_APIKEY_PRIVATE // Your API Secret
);


// Validation Schemas
const registerSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

const loginSchema = yup.object().shape({
    email: yup.string().email('Invalid email format').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters long').required('Password is required'),
});

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await registerSchema.validate({ name, email, password }, { abortEarly: false });

        // Check if email already exists
        const existingUser = await userService.getUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const { token, message } = await userService.registerUser(name, email, password);
        res.json({ token, message });
        console.log("Registration Successful");
        // Send Welcome Email
        const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: 'abdullahmansoor04@gmail.com', // Replace with your verified sender email
                Name: 'Tiefen Reich'
              },
              To: [
                {
                  Email: email,
                  Name: name
                }
              ],
              Subject: 'Welcome to Tiefen Reich - Your Journey to Perfect Properties Begins!',
              TextPart: 'Welcome to Tiefen Reich!\n\nThank you for joining our community of property seekers and investors. We\'re excited to help you discover your perfect property, whether you\'re looking for a short-term stay or a long-term home.\n\nWhat you can do with Tiefen Reich:\n- Search properties across multiple cities\n- Compare rental prices and locations\n- Get personalized property recommendations\n- Access detailed property information and photos\n\nNeed help? Our support team is always here for you.\n\nBest regards,\nThe Tiefen Reich Team',
              HTMLPart: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <div style="text-align: center; padding: 20px 0;">
                    <h1 style="color: #2c3e50; margin-bottom: 10px;">Welcome to Tiefen Reich!</h1>
                    <p style="color: #7f8c8d; font-size: 16px;">Your journey to finding the perfect property starts here</p>
                  </div>
                  
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <p style="color: #2c3e50; font-size: 16px; line-height: 1.6;">
                      Thank you for joining our community of property seekers and investors. We're excited to help you discover your perfect property, whether you're looking for a short-term stay or a long-term home.
                    </p>
                  </div>

                  <div style="margin: 30px 0;">
                    <h2 style="color: #2c3e50; font-size: 20px;">What you can do with Tiefen Reich:</h2>
                    <ul style="color: #2c3e50; font-size: 16px; line-height: 1.6;">
                      <li>Search properties across multiple cities</li>
                      <li>Compare rental prices and locations</li>
                      <li>Get personalized property recommendations</li>
                      <li>Access detailed property information and photos</li>
                    </ul>
                  </div>

                  <div style="background-color: #e8f4f8; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #2980b9; margin-top: 0;">Need Help?</h3>
                    <p style="color: #2c3e50; font-size: 16px;">
                      Our support team is always here for you. Feel free to reach out if you have any questions!
                    </p>
                  </div>

                  <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                    <p style="color: #7f8c8d; font-size: 14px;">Best regards,<br>The Tiefen Reich Team</p>
                  </div>
                </div>
              `
            }
          ]
        });
      console.log(email);
      console.log(name);
      request
        .then(result => {
          console.log('Email sent successfully:', result.body);
        })
        .catch(err => {
          console.error('Error sending email:', err.statusCode, err.message);
        });




    } catch (error) {
        console.error('Validation Error:', error); // Log the complete error object
        if (error.name === 'ValidationError') {
            console.error('Validation Errors:', error.errors); // Log `error.errors`
            return res.status(400).json({ message: Array.isArray(error.errors) ? error.errors.join(', ') : 'Validation error occurred' });
        }
        console.error('Error during registration:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
    
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Validate input
        await loginSchema.validate({ email, password }, { abortEarly: false });

        const { token, message } = await userService.loginUser(email, password);
        // FInd the user from db and send it to the frontend
        const user = await userService.getUserByEmail(email);
        res.json({ token, message, user });
        console.log("Login Successful");
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error during login:', error.message);
        res.status(error.status || 500).json({ message: error.message || 'Server error' });
    }
};

// Send Email to All Users
exports.sendEmailToAllUsers = async (req, res) => {
    const { subject, body } = req.body;

    try {
        // Fetch all users from the database
        const users = await userService.getAllUsers(); // Assuming this method exists in userService
        const emails = users.map(user => user.email); // Extract emails from users

        // Send email to all users
        const emailPromises = emails.map(email => {
            const request = mailjet
                .post('send', { version: 'v3.1' })
                .request({
                    Messages: [
                        {
                            From: {
                                Email: 'abdullahmansoor04@gmail.com', // Replace with your verified sender email
                                Name: 'Tiefen Reich'
                            },
                            To: [
                                {
                                    Email: email,
                                    Name: '' 
                                }
                            ],
                            Subject: subject,
                            TextPart: body,
                            HTMLPart: body // Assuming body can be HTML; adjust as needed
                        }
                    ]
                });
            return request;
        });

        // Wait for all email promises to resolve
        await Promise.all(emailPromises);

        res.json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Error sending email to all users:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// ---------------------------------------------------------PROFILE---------------------------------------------------------

// Get User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await userService.getUserProfile(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
        console.log("Profile Fetched Successfully");
    } catch (error) {
        console.error('Error fetching profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Validation Schema------------------------------------------------------------------------------------------------------------ needs to be updated
const updateUserProfileSchema = yup.object().shape({
    name: yup.string().min(3, 'Name must be at least 3 characters long').max(50, 'Name must be at most 50 characters long').optional(),
    phone: yup.string().optional(), // Allow phone number to be updated
    profilePicture: yup.string().optional(), // Allow profile picture URL to be updated
    isHost: yup.boolean().optional(), // Allow isHost status to be updated
    emailNotificationsEnabled: yup.boolean().optional(),
    password: yup.string().min(6, 'Password must be at least 6 characters long').optional(),
});

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    try {
        // Validate input
        await updateUserProfileSchema.validate(req.body, { abortEarly: false });

        const updatedUser = await userService.updateUserProfile(req.user.id, req.body);
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Profile updated successfully', user: updatedUser });
    } catch (error) {
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.errors.join(', ') });
        }
        console.error('Error updating profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete User Profile
exports.deleteUserProfile = async (req, res) => {
    try {
        const deletedUser = await userService.deleteUserProfile(req.user.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'Profile deleted successfully' });
        console.log("Profile Deleted Successfully");
    } catch (error) {
        console.error('Error deleting profile:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
};

