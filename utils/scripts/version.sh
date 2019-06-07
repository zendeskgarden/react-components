#!/bin/sh

# Set auth variable for lerna-changelog and github-release.js
GITHUB_AUTH=$(git config github.token)

if [[ -z $GITHUB_AUTH ]]; then
    echo "ERROR: Must provide 'github.token' in git configuration"
    exit 1
fi

# Exit on error
set -e

echo "INFO: Pulling recent changes..."
git pull

echo "INFO: Validating environment..."
yarn install --ignore-scripts
yarn lerna bootstrap
yarn lint
yarn test:all

echo "INFO: Prompt for new version..."
yarn lerna version

echo "INFO: Retrieve recent git tags..."
current_tag=$(git describe --abbrev=0 --tags)
previous_tag=$(git describe --abbrev=0 --tags $current_tag^)

echo "INFO: Generating changelog..."
temp_changelog_path="CHANGELOG.temp"
node node_modules/.bin/lerna-changelog --tag-from $previous_tag --tag-to $current_tag > $temp_changelog_path

echo "INFO: Allowing changelog edits..."
# Retrieve default git editor
git_editor=$(git var GIT_EDITOR)
# Edit temp file
$git_editor $temp_changelog_path
# Retrieve temp file and delete
changelog=$(cat $temp_changelog_path)
rm $temp_changelog_path

echo "INFO: Publishing Github release..."
echo "$changelog" | node utils/scripts/github-release.js $current_tag

echo "INFO: Updating CHANGELOG.md..."
echo "$changelog" | node utils/scripts/update-changelog.js

echo "INFO: Committing changelog..."
git add CHANGELOG.md
git commit -m "Add $current_tag to CHANGELOG.md [skip ci]" --no-verify --quiet

echo "INFO: Pushing updates..."
git push master

echo "INFO: Versioning process complete..."
echo "\n\nDon't forget to approve the draft release:\nhttps://github.com/zendeskgarden/react-components/releases"
