#!/bin/bash

echo -e "Installing all requirements for running SoleFinder..."
sudo npm install
sudo npm install python-shell@0.5.0
npm i -D electron@latest
pip3 install -r requirements.txt

echo -e "Launching SoleFinder application..."
npm start