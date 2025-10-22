# 🚀 How to Start Your Hackathon Website

## PowerShell Execution Policy Issue

Your system has PowerShell script execution disabled. Here are the solutions:

### Option 1: Run in Command Prompt (Recommended)
1. Open **Command Prompt** (cmd.exe) instead of PowerShell
2. Navigate to your project:
   ```
   cd c:\Users\bhanu\Desktop\myhack
   ```
3. Start the development server:
   ```
   npm start
   ```

### Option 2: Enable PowerShell Scripts (One-time setup)
1. Open PowerShell as **Administrator**
2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type 'Y' to confirm
4. Then navigate to your project and run:
   ```powershell
   cd c:\Users\bhanu\Desktop\myhack
   npm start
   ```

### Option 3: Use VS Code Terminal
1. Open the project folder in VS Code
2. Open the terminal (Ctrl + `)
3. The terminal should work without issues
4. Run: `npm start`

## After Starting

Once the server starts, your website will automatically open in your default browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to that URL.

## What You'll See

Your complete hackathon website with:
- ✅ Animated hero section with gradient effects
- ✅ Smooth scrolling navigation
- ✅ Interactive timeline
- ✅ Colorful track cards
- ✅ FAQ accordion
- ✅ Registration form
- ✅ Fully responsive design

## Making Changes

The website will automatically reload when you save changes to any file!

## Need Help?

If you encounter any issues:
1. Make sure Node.js is installed: `node --version`
2. Make sure npm is installed: `npm --version`
3. Try deleting `node_modules` and running `npm install` again
4. Check the browser console for any errors (F12)

---

**Enjoy building your hackathon website! 🎉**
