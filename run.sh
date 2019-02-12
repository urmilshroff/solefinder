#!/bin/bash

echo -e "Currently available test images are:"
ls test_images/
echo -e
read -p "Which test image do you want to use? " choice

echo -e "\nRunning SoleFinder to detect $choice..."

# python3 scripts/label_image.py --graph=tf_files/retrained_graph.pb --labels=tf_files/retrained_labels.txt --output_layer=final_result --input_height=299 --input_width=299 --image=test_images/$choice

shoe=$(python3 scripts/label_image.py --graph=tf_files/retrained_graph.pb --labels=tf_files/retrained_labels.txt --output_layer=final_result --input_height=299 --input_width=299 --image=test_images/$choice | tail -1)

echo -e "\nDetected shoe was $shoe!"