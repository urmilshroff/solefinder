# SoleFinder
A Deep Learning app using Tensorflow to detect different shoes and provide information about them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.6
- TensorFlow
- TensorFlow Hub

### Installing

- Install Python 3.6 from python.org
- Install TensorFlow using ```pip install tensorflow```
- Install TensorFlow Hub using ```pip install tensorflow-hub```

## Retraining the model

- Download the images in .jpeg, jpg or png format
- Run the following command
```python scripts/retrain.py --bottleneck_dir=tf_files/bottlenecks --how_many_training_steps=500 --model_dir=inception --summaries_dir=tf_files/training_summaries --output_graph=tf_files/retrained_graph.pb --output_labels=tf_files/retrained_labels.txt --image_dir={replace_with_dir}```

## Running the tests

To test the retrained model, run the following command
```python scripts/label_image.py --graph=tf_files/retrained_graph.pb --labels=tf_files/retrained_labels.txt --output_layer=final_result --input_height=299 --input_width=299 --image={replace_with_dir}```

## Contributing

This project is licensed under the MIT license. Please feel free to clone/fork/modify the code as you like, and send us pull requests for any improvements, fixes or features. We'll definitely look into them and merge them if satisfactory.

## Authors

- [Urmil Shroff](https://github.com/urmilshroff)
- [Vinay Kolwankar](https://github.com/vinay-ai)
- [Priyansh Ramnani](https://github.com/prince1998)

Also checkout the list of [contributors](https://github.com/urmilshroff/solefinder/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details