#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new git repository
git init
git add -A
git commit -m 'deploy'

# Force push to the gh-pages branch
git push -f git@github.com:comiskey/react-portfolio.git master:gh-pages

# Navigate back to the root project directory
cd -
