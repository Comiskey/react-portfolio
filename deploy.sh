#!/bin/bash

# Exit on error
set -e

# Ensure the script is executed from the project's root directory
if [ ! -f "package.json" ]; then
  echo "Error: package.json not found. Please run this script from the root of your project."
  exit 1
fi

# Step 1: Commit changes to main branch
echo "Committing changes to main branch..."
git checkout main
git add .
git commit -m "Save current changes"
git push origin main

# Step 2: Build the project
echo "Building the project..."
npm install
npm run build

# Step 3: Switch to gh-pages branch and pull latest changes
echo "Switching to gh-pages branch..."
git checkout gh-pages
git pull origin gh-pages --allow-unrelated-histories

# Step 4: Remove old files
echo "Removing old files..."
git rm -rf .

# Step 5: Copy new build files
echo "Copying new build files..."
cp -r dist/* .

# Step 6: Add and commit new build files
echo "Adding and committing new build files..."
git add .
git commit -m "Deploy latest build to GitHub Pages"

# Step 7: Push changes to gh-pages branch
echo "Pushing changes to gh-pages branch..."
git push origin gh-pages

# Step 8: Switch back to main branch
echo "Switching back to main branch..."
git checkout main

echo "Deployment to GitHub Pages completed successfully."
