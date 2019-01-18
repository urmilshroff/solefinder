import tensorflow as tf
from tensorflow import keras
import numpy as np

# fashion_mnist = keras.datasets.fashion_mnist
# (train_images, train_labels), (test_images,
#                                test_labels) = fashion_mnist.load_data()

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation=tf.nn.relu),
    keras.layers.Dense(10, activation=tf.nn.softmax)
])

train_images = train_images / 255.0
test_images = test_images / 255.0

model.compile(optimizer=tf.train.AdamOptimizer(),
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

model.fit(train_images, train_labels, epochs=5) #increasing the number of epochs will make it smarter
test_loss, test_acc = model.evaluate(test_images, test_labels)

print('Test accuracy:', test_acc)

predictions=model.predict(test_images) #creates an array of the test images