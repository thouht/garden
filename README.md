<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1OvBTbPM6lXkiHF1Cp_eIthGW6-2CHVaU

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured with a GitHub Actions workflow that builds the Vite site and deploys it to GitHub Pages.

1. Push the code to a GitHub repository (the workflow triggers on the `main` and `work` branches).
2. (Optional) Add a `GEMINI_API_KEY` repository secret if your build requires it.
3. In the repository settings, enable **Pages** and select **GitHub Actions** as the source.
4. Every push to the tracked branches will build the site and publish it to the `github-pages` environment using the `gh-pages` URL.

> The workflow sets `BASE_URL` to `/<repository-name>/` so assets resolve correctly when served from GitHub Pages.
