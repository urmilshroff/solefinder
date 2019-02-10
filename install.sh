#!/bin/bash

echo -e "Installing all requirements for running SoleFinder..."
pip3 install -r requirements.txt
npm install python-shell
npm i -D electron@latest
npm install

echo -e "Launching SoleFinder application..."
npm start