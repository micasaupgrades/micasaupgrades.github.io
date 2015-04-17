#!/bin/bash

# must use ssh URL
# git remote set-url origin git@github.com:micasaupgrades/micasaupgrades.github.io.git
echo "ssh github"
ssh -T git@github.com

echo "grunt build"
grunt build

echo "adding + committing code"
git add .
git commit -am 'cleaned about section'

echo "push to origin src"
git push origin src

echo "deploy to master"
git subtree push --prefix dist origin master

echo "done!"



