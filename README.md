# Doctor Prescription Service

Doctor Prescription Service is a machine learning-based project designed to classify diseases based on a given set of symptoms and provide corresponding prescriptions. The aim is to create an intelligent system that assists doctors and patients by offering accurate diagnoses and treatment suggestions.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Data](#data)
- [Model Training](#model-training)
- [Prescription Generation](#prescription-generation)
- [Contribution](#contribution)
- [License](#license)

## Project Overview

In this project, we develop a machine learning model to classify diseases based on symptoms provided by the user. Initially, a disease will be predicted, but later on, we are working to also provide prescriptions for the same (possibly using another model).

## Features

- **Symptom-based Disease Classification**: Classifies diseases based on symptoms provided by the user.
- **Prescription Generation**: Provides a list of medications and treatment plans tailored to the diagnosed disease. _(tentative)_
- **Simple Interface**: A simple web interface will be used to allow easy and controlled interaction with the model.

## Installation

## Usage

## Data

The project relies on a dataset containing symptoms and their associated diseases. The dataset has the following:

- **Symptoms**: A list of columns containing symptoms associated with each disease. Each column is a symptom on its own with a binary output: 0 representing that the symptom is not present, and 1 meaning that the symptom is present.
- **Diseases**: A comprehensive list of diseases covered by the model.
- **Prescriptions**: A list of drugs that can be used to help in the treatment process. _(tentative)_

The dataset has around 250,000 rows comprising 339 symptoms with 773 diseases.

## Model Training

The machine learning model is trained using the following steps:

1. **Data Preprocessing**:
    - Clean and preprocess the symptom data.
    - Encode the symptoms and diseases as numerical values.
    
2. **Model Selection**:
    - Currently experimenting with `RandomForestClassifier`, but will try to train different models:  
        - KNN
        - MLP Classifier
        - Logistic Regression
        - Boosting techniques
    
3. **Training**:
    - Train the selected model on the dataset.
    
4. **Evaluation**:
    - Evaluate the model's accuracy, precision, recall, and other metrics. A comprehensive graph will be provided in the Jupyter notebook.

5. **Optimization**:
    - Optimize hyperparameters using techniques like Grid Search or Randomized Search.

## Prescription Generation

Once a disease is classified, the system generates a prescription (method not decided yet).

## Contribution

This project is jointly contributed to by the members of the DPS Team in Makernova 2.0, a recruitment program for DRISHTI (SVNIT).

## License

This project is licensed under the MIT License.