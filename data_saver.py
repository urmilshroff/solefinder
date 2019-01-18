import cv2
import numpy as np
import random
import pickle
import os


def create_training_data():
    for category in categories:
        path = os.path.join(data_dir, category)  # path to every shoe's images
        class_num = categories.index(category)

        for img in os.listdir(path):
            try:
                img_list = cv2.imread(os.path.join(
                    path, img), cv2.IMREAD_GRAYSCALE)
                # resized_list = cv2.resize(img_list, (img_size, img_size))
                training_data.append([img_list, class_num])
            except OSError:
                print("Error: Image may be broken!")

    random.shuffle(training_data)

    for features, labels in training_data:
        x.append(features)
        y.append(labels)
    # x = np.array(x).reshape(-1, img_size, img_size, 1)


def save_training_data():
    pickle_out = open("x.pickle", "wb")
    pickle.dump(x, pickle_out)
    pickle_out.close()

    pickle_out = open("y.pickle", "wb")
    pickle.dump(y, pickle_out)
    pickle_out.close()


img_size = 256
data_dir = "./datasets"
categories = ["adidas_alphabounce", "adidas_kalus", "adidas_nite_jogger",
              "adidas_superstar", "adidas_ultraboost", "adidas_yeezy", "adidas_zeta"]
training_data = []
x, y = [], []

create_training_data()
save_training_data()