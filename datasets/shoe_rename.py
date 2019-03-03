import os

shoe = input("Enter name of the shoe:\n")

path = "./" + shoe + "/"
files = os.listdir(path)
i = 0

for file in files:
    os.rename(os.path.join(path, file), os.path.join(path, shoe + str(i) + ".jpeg"))
    i += 1