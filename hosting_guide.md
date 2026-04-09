# Hosting Your Portfolio on GitHub

To make your project visible to others, you need to upload it to GitHub and then enable **GitHub Pages** to create a live link.

## Step 1: Create a GitHub Repository
1. Log in to [GitHub.com](https://github.com/).
2. Click the **+** icon in the top right and select **New repository**.
3. Name it `portfolio`.
4. Keep it **Public** (so others can see it).
5. Click **Create repository**. (Do **not** initialize with a README if you already have one locally).

---

## Step 2: Upload Your Code
Since you are on Windows and don't have Git installed, the easiest way is to use **GitHub Desktop**.

1. **Download & Install**: [GitHub Desktop](https://desktop.github.com/).
2. **Sign In**: Open the app and sign in to your GitHub account.
3. **Add Your Project**:
   - Go to `File` > `Add Local Repository`.
   - Browse to your folder: `C:\Users\HP\Desktop\portfolio`.
   - GitHub Desktop will say "this directory does not appear to be a Git repository." Click **create a repository** in that link.
   - Click **Create Repository**.
4. **Publish**: Click the **Publish repository** button at the top to upload it to GitHub.

---

## Step 3: Enable GitHub Pages (To see it live)
Once your code is on GitHub:
1. Go to your repository on GitHub.com.
2. Click on **Settings** (top tab).
3. Click on **Pages** (left sidebar).
4. Under **Build and deployment** > **Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Wait a minute, and you will see a link like: `https://your-username.github.io/portfolio/`.

---

## Important Note on Backends
GitHub Pages only hosts **static** files (HTML, CSS, JS). 
- Your main portfolio and the project folders (like `projects/course-registration.html`) will work perfectly as mockups.
- However, your `server.js` and `db.json` backends will **not** run on GitHub Pages. To host full-stack apps with a working database, I recommend [Render](https://render.com/) or [Railway](https://railway.app/).

> [!TIP]
> I have already created a `.gitignore` file for you in your folder. This ensures that bulky files like `node_modules` are not uploaded, keeping your repository clean!
