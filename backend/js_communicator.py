import sys
import os

import label_image as lbim

path_to_image = sys.argv[1]

args = "python3 label_image.py --graph=tf_files/retrained_graph.pb --labels=tf_files/retrained_labels.txt --output_layer=final_result --input_height=299 --input_width=299 --image=/" + path_to_image

os.system(args)