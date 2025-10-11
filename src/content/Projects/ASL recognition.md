---
title: "ALS Gesture Recognition"
date: "2023-1"
description: "Recognizing American Sign Language gestures in real time using a webcam."
tags: ["Machine Learning", "CNN", "OpenCV", "TensorFlow"]
image: "/projects/asl-recognition/asl.jpg"
link: "https://github.com/HliasOuzounis/Art_Gallery"
---

The aim of this project was to recognize American Sign Language (ASL) gestures in real-time using a webcam.

![ASL Recognition](/projects/asl-recognition/asl.jpg)

## Architecture

A convolutional neural network (CNN) was trained on a dataset of ASL images. After training, the model can be used to analyze real-time video feed from a webcam and predict the ASL gestures being made in real-time. The model had to be optimized to be able to run every frame.

![CNN Architecture](/projects/asl-recognition/architecture.png)

## Demo

You can watch a demo of the ASL recognition system in action by [clicking here](/projects/asl-recognition/demo.mp4).
