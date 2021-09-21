#!/usr/bin/env bash
# Makes sure rush is available globally
if ! command -v rush &> /dev/null
then
  echo "rush is not installed. Installing it"
  npm i -g @microsoft/rush
fi
# install dependecies
rush install
# Build every project
rush build
# deploys app
rush deploy --overwrite -p landing
(cd common/deploy/apps/landing && rushx build)
