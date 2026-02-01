# 🎯 WHAT I NEED FROM YOU - Quick Checklist

**Hi Lakshya!** Here's exactly what you need to provide to run Fusebox Eduflow locally:

---

## ✅ STEP 1: Sign Up for Required Services (FREE)

### 1. MongoDB Database (Choose ONE option)

**RECOMMENDED:** **MongoDB Atlas** (Cloud - Easier for beginners)
- 🌐 Go to: https://cloud.mongodb.com
- ✍️ Sign up with your email
- 🆓 Create FREE cluster (M0 tier)
- ⚙️ Steps:
  1. Create new project called "StudyMaster"
  2. Build a Database → FREE Shared cluster
  3. Create username & password (save these!)
  4. Add IP: 0.0.0.0/0 (allow from anywhere)
  5. Click "Connect" → "Connect your application"
  6. Copy connection string (looks like: `mongodb+srv://username:password@cluster...`)

**Alternative:** Install MongoDB locally (more complex)

---

### 2. Cloudinary (Image/Video Storage)

- 🌐 Go to: https://cloudinary.com
- ✍️ Sign up (FREE account)
- 📋 Get these 3 values from Dashboard:
  - **Cloud Name:** (example: dxyz123abc)
  - **API Key:** (example: 123456789012345)
  - **API Secret:** (example: abcdef-ghijklmn12345)

---

### 3. Razorpay (Payment Gateway)

- 🌐 Go to: https://razorpay.com
- ✍️ Sign up for FREE
- 🧪 Use TEST mode (no real money needed)
- 📋 Go to Settings → API Keys → Generate Test Keys
  - **Key ID:** (example: rzp_test_abc123xyz)
  - **Key Secret:** (example: def456uvw789)

---

### 4. Gmail App Password (Email Service)

You'll use your existing Gmail: **lakshyakhetan00@gmail.com**

⚙️ Generate App Password:
1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already)
3. Search for "App passwords"
4. Select "Mail" and "Windows Computer"
5. Google will generate 16-character password (example: abcd efgh ijkl mnop)
6. **SAVE THIS PASSWORD!** You won't see it again

---

## ✅ STEP 2: Fill in Your .env Files

### Backend .env (already created at `backend/.env`)

Open the file and replace these values:

```env
# MongoDB Connection String (from Step 1.1)
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/studymaster

# JWT Secret (just make up a random string)
JWT_SECRET=lakshya_secret_key_12345_random_string

# Cloudinary Values (from Step 1.2)
CLOUD_NAME=your_cloud_name_here
API_KEY=your_api_key_here
API_SECRET=your_api_secret_here

# Razorpay Values (from Step 1.3)
RAZORPAY_KEY=rzp_test_your_key_id
RAZORPAY_SECRET=your_key_secret

# Gmail App Password (from Step 1.4)
MAIL_USER=lakshyakhetan00@gmail.com
MAIL_PASS=your_16_character_app_password
```

### Frontend .env (already created at `frontend/.env`)

```env
VITE_APP_BASE_URL=http://localhost:5000/api/v1
VITE_RAZORPAY_KEY=rzp_test_your_key_id  (same as backend)
```

---

## ✅ STEP 3: Run the Project

### Option 1: Double-click the startup file
Just double-click: **`start.bat`** file in the project folder

### Option 2: Manual start
Open 2 PowerShell windows:

**Window 1 (Backend):**
```powershell
cd backend
npm install
npm run dev
```

**Window 2 (Frontend):**
```powershell
cd frontend
npm install
npm run dev
```

---

## ✅ STEP 4: Access Your Application

Open browser and go to: **http://localhost:5173**

Backend API: **http://localhost:5000**

---

## 📝 Quick Summary - What You Need

| Service | What to Get | Where |
|---------|-------------|-------|
| **MongoDB** | Connection String | cloud.mongodb.com |
| **Cloudinary** | Cloud Name, API Key, API Secret | cloudinary.com |
| **Razorpay** | Key ID, Key Secret | razorpay.com |
| **Gmail** | App Password (16 chars) | myaccount.google.com/security |

---

## ❓ Which Option is Easiest?

**For beginners, I recommend:**
- ✅ MongoDB Atlas (cloud) instead of local MongoDB
- ✅ Cloudinary free tier
- ✅ Razorpay TEST mode
- ✅ Gmail App Password

All of these are **100% FREE** for development!

---

## 🆘 Need Help?

If you get stuck:
1. Read the detailed **SETUP_GUIDE.md** file
2. Check error messages in terminal
3. Verify all values in .env are correct (no extra spaces!)

---

## ⏱️ Time Required

- Signing up for services: ~20 minutes
- Configuring .env files: ~5 minutes
- Installing dependencies: ~5 minutes
- **Total: ~30 minutes to get running!**

---

Ready to start? Let me know which service you want to set up first! 🚀
