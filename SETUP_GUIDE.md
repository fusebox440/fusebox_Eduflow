# 🚀 Fusebox Eduflow - Local Setup Guide

**Created by:** Lakshya Khetan  
**Email:** lakshyakhetan00@gmail.com

---

## 📋 Prerequisites

Before running this project, make sure you have installed:

1. **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) OR use MongoDB Atlas (cloud)
3. **Git** - [Download here](https://git-scm.com/)
4. **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

---

## 🔧 Required Services & API Keys

You need to sign up for these services (all have free tiers):

### 1. **MongoDB Database**
- **Option A - Local MongoDB:** Install MongoDB on your computer
- **Option B - MongoDB Atlas (Cloud):** 
  - Sign up at: https://cloud.mongodb.com
  - Create a new cluster (free tier)
  - Get connection string

### 2. **Cloudinary (Image/Video Storage)**
- Sign up at: https://cloudinary.com
- Get: Cloud Name, API Key, API Secret
- Find them in Dashboard → Account Details

### 3. **Razorpay (Payment Gateway)**
- Sign up at: https://razorpay.com
- Get: Key ID and Secret Key
- Test mode is available for development

### 4. **Gmail App Password (Email Service)**
- Use your Gmail: lakshyakhetan00@gmail.com
- Generate App Password:
  1. Go to Google Account → Security
  2. Enable 2-Step Verification
  3. Go to App Passwords
  4. Generate password for "Mail"

---

## 📦 Installation Steps

### Step 1: Install Dependencies

Open **PowerShell** in the project folder and run:

```powershell
# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install
```

### Step 2: Configure Environment Variables

#### Backend (.env file is already created)
Edit: `backend/.env`

Replace these values:

```env
# Database - Choose one:
# For Local MongoDB:
DATABASE_URL=mongodb://localhost:27017/studymaster

# For MongoDB Atlas (Cloud):
# DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/studymaster

# JWT Secret (Create a random string)
JWT_SECRET=your_super_secret_random_string_12345

# Cloudinary (Get from cloudinary.com dashboard)
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Razorpay (Get from razorpay.com dashboard)
RAZORPAY_KEY=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key

# Gmail (Your email is already set)
MAIL_USER=lakshyakhetan00@gmail.com
MAIL_PASS=your_gmail_app_password
```

#### Frontend (.env file is already created)
Edit: `frontend/.env`

```env
VITE_APP_BASE_URL=http://localhost:5000/api/v1
VITE_RAZORPAY_KEY=your_razorpay_key_id
```

---

## ▶️ Running the Application

### Option 1: Run Both Servers Separately

**Terminal 1 - Backend:**
```powershell
cd backend
npm run dev
```
Backend will run on: http://localhost:5000

**Terminal 2 - Frontend:**
```powershell
cd frontend
npm run dev
```
Frontend will run on: http://localhost:5173

### Option 2: Quick Start (Recommended)

Open the project in VS Code, then:

1. Open Terminal (Ctrl + `)
2. Split terminal (click split icon)
3. In first terminal:
   ```powershell
   cd backend
   npm run dev
   ```
4. In second terminal:
   ```powershell
   cd frontend
   npm run dev
   ```

---

## 🌐 Access the Application

Once both servers are running:

- **Frontend:** Open browser and go to http://localhost:5173
- **Backend API:** http://localhost:5000

---

## 🧪 Testing the Setup

1. Open http://localhost:5173 in browser
2. Click "Sign Up" to create a new account
3. You should receive an OTP email at your configured email
4. Complete registration and test the features

---

## 🐛 Common Issues & Solutions

### Issue 1: MongoDB Connection Failed
**Solution:** 
- If using local MongoDB, make sure MongoDB service is running
- For Atlas, check if your IP is whitelisted in Atlas dashboard

### Issue 2: Port Already in Use
**Solution:**
```powershell
# Kill process on port 5000
npx kill-port 5000

# Kill process on port 5173
npx kill-port 5173
```

### Issue 3: Email Not Sending
**Solution:**
- Verify Gmail App Password is correct
- Check if 2-Step Verification is enabled
- Try generating a new App Password

### Issue 4: Payment Gateway Error
**Solution:**
- Ensure Razorpay is in TEST mode for development
- Verify both KEY and SECRET are correct
- Frontend and Backend should have same RAZORPAY_KEY

### Issue 5: Cloudinary Upload Failed
**Solution:**
- Double-check Cloud Name, API Key, and API Secret
- Ensure no extra spaces in .env file

---

## 📱 First Time Setup Checklist

- [ ] Node.js installed
- [ ] MongoDB installed or Atlas account created
- [ ] Backend dependencies installed (`npm install`)
- [ ] Frontend dependencies installed (`npm install`)
- [ ] Backend .env file configured with all API keys
- [ ] Frontend .env file configured
- [ ] MongoDB is running (if local)
- [ ] Backend server started successfully
- [ ] Frontend server started successfully
- [ ] Can access http://localhost:5173
- [ ] Email service tested (OTP received)

---

## 📧 Need Help?

If you encounter any issues:
1. Check the terminal for error messages
2. Verify all environment variables are set correctly
3. Make sure all services (MongoDB, Cloudinary, Razorpay) are properly configured

**Contact:** lakshyakhetan00@gmail.com

---

## 🎉 You're All Set!

Your Fusebox Eduflow LMS platform is now running locally! Start creating courses and exploring the features.

Happy Learning! 📚✨
