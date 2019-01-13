# SoleFinder
PL group project - done by Urmil Shroff, Vinay Kolwankar and Priyansh Ramnani.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Python
Tensorflow
Tensorflow-hub

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

1: Install Python using the command "pip install python"
2: Install Tensorflow using the command "pip install tensorflow"
3: Install Tensorflow using the command "pip install tensorflow-hub"

## Retraining the model

1: Download the images in .jpeg,jpg or png format
2: Run this command in the terminal "python scripts/retrain.py --bottleneck_dir=tf_files/bottlenecks --how_many_training_steps=500 --model_dir=inception --summaries_dir=tf_files/training_summaries --output_graph=tf_files/retrained_graph.pb --output_labels=tf_files/retrained_labels.txt --image_dir=datasets/"

## Running the tests

To test the retrained model run this command in the terminal "python scripts/label_image.py --graph=tf_files/retrained_graph.pb --labels=tf_files/retrained_labels.txt --output_layer=final_result --input_height=299 --input_width=299 --image={replace_with_dir}"

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc