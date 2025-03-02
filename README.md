# ⏰ Animated Digital Clock  

A simple **animated digital clock** built with **HTML, CSS, and JavaScript**, featuring a **flip animation effect** that updates every second.  

---



## ✨ Features  
✔️ Smooth flip animation on time change  
✔️ 12-hour format with AM/PM  
✔️ Responsive design for all screen sizes  
✔️ Lightweight and fast  

---


## 🔧 Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/digital-clock.git
cd digital-clock
```

### 2️⃣ Open the Project  
- Open `index.html` in your browser.  
- No additional setup is required.  

### 3️⃣ Customize (Optional)  
- Modify **styles.css** to change colors, fonts, or layout.  
- Update **script.js** to tweak animations or time formats.  

---

## 📡 Deploy on AWS S3  

### 1️⃣ Create an S3 Bucket  
- Go to **AWS Console → S3 → Create bucket**  
- Uncheck **Block all public access**  

### 2️⃣ Upload Files  
- Upload `index.html`, `styles.css`, and `script.js`  

### 3️⃣ Enable Static Website Hosting  
- Go to **Properties → Static website hosting**  
- Set **Index document** to `index.html`  

### 4️⃣ Make Files Public  
- Go to **Permissions → Bucket Policy**  
- Add this policy (Replace `BUCKET_NAME` with your actual bucket name)  
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::BUCKET_NAME/*"
        }
    ]
}
```

### 5️⃣ Access Your Clock  
- Find your **S3 Website Endpoint** under **Properties → Static website hosting**  
- Open the URL in your browser 🎉  

---

## 🛠 Technologies Used  
- **HTML** → Structure  
- **CSS** → Styling & Animations  
- **JavaScript** → Clock logic & time updates  
- **AWS S3** → Hosting (Optional)  

---
