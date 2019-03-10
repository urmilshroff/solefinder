<p align="center"><img height="250px" width="250px" src="./img/logo/solefinder-text.png" alt="SoleFinder"/></p>

# SoleFinder

A Deep Learning app made using TensorFlow and Electron.js to detect the exact model of different pairs of shoes and provide information about them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Python 3.6.8
-   Node.js 6.9.0

### Installing

-   Install Python 3.6 from [python.org](https://www.python.org/downloads/release/python-368/)
-   Install Node.js from [nodejs.org](https://nodejs.org/en/download/current/)

## Building

-   Clone this repo using `git clone https://github.com/urmilshroff/solefinder.git`
-   Type `cd solefinder` to go into the repo directory
-   Run `bash install.sh` to install all the dependencies
-   Run `npm start` to launch the app

## Retraining Dataset

If you wish to add your own shoes/create your own dataset, then use the following method.

-   Download 100-150 images of a particular shoe
-   Save them all in `/datasets/shoe_name/`
-   Run `python /datasets/shoe_rename.py` to rename all the images
-   Run `bash retrain.sh` to retrain the dataset

## Contributing

This project is licensed under the MIT license. Please feel free to clone/fork/modify the code as you like, and send us pull requests for any improvements, bugfixes or features. We'll definitely look into them and merge them if satisfactory.

## Authors

-   [Urmil Shroff](https://github.com/urmilshroff)
-   [Vinay Kolwankar](https://github.com/vinay-ai)
-   [Priyansh Ramnani](https://github.com/prince1998)

Also checkout the list of [contributors](https://github.com/urmilshroff/solefinder/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.