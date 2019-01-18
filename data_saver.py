import cv2
import numpy as np
import random
import pickle
import os


class DataSaver:
    def __init__(self):
        self.img_size = 256
        self.data_dir = "./datasets"
        self.categories = ["adidas_alphabounce", "adidas_kalus", "adidas_nite_jogger",
                           "adidas_superstar", "adidas_ultraboost", "adidas_yeezy", "adidas_zeta"]
        self.training_data = []
        self.x, self.y = [], []

    def create_training_data(self):
        for category in self.categories:
            # path to every shoe's images
            path = os.path.join(self.data_dir, category)
            class_num = self.categories.index(category)

            for img in os.listdir(path):
                try:
                    img_list = cv2.imread(os.path.join(
                        path, img), cv2.IMREAD_GRAYSCALE)
                    # resized_list = cv2.resize(img_list, (self.img_size, self.img_size))
                    self.training_data.append([img_list, class_num])
                except OSError:
                    print("Error: Image may be broken!")

        random.shuffle(self.training_data)

        for features, labels in self.training_data:
            self.x.append(features)
            self.y.append(labels)
        # self.x = np.array(self.x).reshape(-1, self.img_size, self.img_size, 1)

    def save_training_data(self):
        pickle_out = open("x.pickle", "wb")
        pickle.dump(self.x, pickle_out)
        pickle_out.close()

        pickle_out = open("y.pickle", "wb")
        pickle.dump(self.y, pickle_out)
        pickle_out.close()