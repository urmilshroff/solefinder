import tensorflow as tf
from tensorflow import keras
import data_saver as ds
import os

obj = ds.DataSaver()
while True:
    if os.path.exists("./x.pickle") and os.path.exists("./y.pickle"):
        xy = obj.load_training_data()
        x, y = xy[0], xy[1]
        break
    else:
        obj.create_training_data()
        obj.save_training_data()

(train_images, train_labels), (test_images,
                               test_labels) = x.load_data()

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

model.fit(train_images, train_labels, epochs=5)
test_loss, test_acc = model.evaluate(test_images, test_labels)

print('Test accuracy:', test_acc)
predictions = model.predict(test_images)