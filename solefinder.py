import tensorflow as tf
from tensorflow import keras
import cv2
import numpy as np

img_size = 100
data_dir = "./datasets"
categories = ["adidas_alphabounce", "adidas_kalus", "adidas_nite_jogger",
              "adidas_superstar", "adidas_ultraboost", "adidas_yeezy", ""]
training_data = []
x, y = [], []


def create_training_data():
    for category in categories:
        path = os.path.join(data_dir, category)  # path to every shoe's images
        class_num = categories.index(category)

        for img in os.listdir(path):
            try:
                img_list = cv2.imread(os.path.join(path, img))
                resized_list = cv2.resize(img_list, (img_size, img_size))
                training_data.append([resized_list, class_num])
            except:
                pass

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

# increasing the number of epochs will make it smarter
model.fit(train_images, train_labels, epochs=5)
test_loss, test_acc = model.evaluate(test_images, test_labels)

print('Test accuracy:', test_acc)

predictions = model.predict(test_images)  # creates an array of the test images
