#!/bin/bash

npm install -g electron-packager

if [ $(uname) == "Darwin" ] #should install only on a Mac
then
    electron-packager . --overwrite --platform=darwin --arch=x64 --icon=img/logo/icon.icns --prune=true --out=release-builds
fi