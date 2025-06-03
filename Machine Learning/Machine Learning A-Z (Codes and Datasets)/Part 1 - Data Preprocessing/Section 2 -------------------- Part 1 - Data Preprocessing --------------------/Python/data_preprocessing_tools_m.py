import numpy as np
import pandas as pd
from sklearn.compose import ColumnTransformer

# Load the dataset
dataset = pd.read_csv('Data.csv')

# Identify missing data (assumes that missing data is represented as NaN)
# first ':' (In the Python ':"  means is a arange") means take all the rows,
# then ':-1' exclude the last one cell in the last column of *.csv file.
# now, 'y' => ' -1' -  we taking only the last colum cells
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

# Print the number of missing entries in each column
print(x)
print(y)

'''
Assignment # 1
# Importing the necessary libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd 
from sklearn.model_selection import train_test_split

# Loading the Iris dataset
dataset = pd.read_csv('iris.csv')

# Creating the matrix of features (X) and the dependent variable vector (y)
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

# Printing the matrix of features and the dependent variable vector
print(X)
print(y)
'''

# Taking care of missing data
from sklearn.impute import SimpleImputer
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
imputer.fit(x[:, 1:3])
x[:, 1:3] = imputer.transform(x[:, 1:3])

print(x)

'''
Assignment # 2
# Importing the necessary libraries
from sklearn.impute import SimpleImputer
import pandas as pd 
import numpy as np

# Load the dataset
dataset = pd.read_csv('pima-indians-diabetes.csv')
# Identify missing data (assumes that missing data is represented as NaN)
x = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values

# Print the number of missing entries in each column
print(x)
print(y)

# Configure an instance of the SimpleImputer class
imputer = SimpleImputer(missing_values=np.nan, strategy='mean')
imputer.fit(x[:, 1:3])
x[:, 1:3] = imputer.transform(x[:, 1:3])

# Fit the imputer on the DataFrame

# Apply the transform to the DataFrame

#Print your updated matrix of features
print(x)
print(y)
'''

# Encoding categorical data
'''
transforming 3 country names into numbers: [1.0 0.0 0.0, 0.0 0.0 1.0, 0.0 1.0 0.0]
'''
from sklearn.preprocessing import OneHotEncoder
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [0])], remainder='passthrough')
x = np.array(ct.fit_transform(x))

print(x)

# Encoding the Independent Variable
'''
transforming 'No' and 'Yes' into numeric '0' and '1'
'''
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
y = le.fit_transform(y)



# Encoding the Dependent Variable
print(y) # [0 1 0 0 1 1 0 1 0 1]

'''
Assignment 3
# 1. Import required libraries
import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, LabelEncoder

# 2. Load the Titanic dataset into a Pandas DataFrame
df = pd.read_csv("titanic.csv")

# 3. Identify categorical features for encoding
categorical_features = ["Sex", "Embarked", "Pclass"]  # Adjust based on dataset columns

# 4. Apply OneHotEncoding using ColumnTransformer
ct = ColumnTransformer(transformers=[("encoder", OneHotEncoder(), categorical_features)], remainder="passthrough")

# 5. Use fit_transform method to encode categorical features
X = np.array(ct.fit_transform(df.drop(columns=["Survived"])))  # Exclude the target column

# 7. Encode the dependent variable ('Survived') using LabelEncoder
le = LabelEncoder()
y = le.fit_transform(df["Survived"])

# 8. Print the updated feature matrix and the dependent variable vector
print("Encoded Feature Matrix:\n", X)
print("\nEncoded Dependent Variable:\n", y)
'''
# Splitting the dataset into the Training set and Test set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(x, y, test_size = 0.2, random_state = 1)

print(X_train, X_test, y_train, y_test, sep="\n")

'''
Assignment # 4

# 1. Import necessary libraries
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# 2. Load the Iris dataset using Pandas
df = pd.read_csv("iris.csv")

# Separate features and target variable
X = df.drop(columns=["target"])  # Feature matrix
y = df["target"]  # Target variable

# 3 & 4. Split the dataset into an 80-20 training-test set with a fixed random state
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 5. Print the training and test sets to examine the split
print("X_train:\n", X_train)
print("\nX_test:\n", X_test)
print("\ny_train:\n", y_train)
print("\ny_test:\n", y_test)

# 6. Apply StandardScaler for feature scaling
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# 7. Print the scaled training and test sets for verification
print("\nScaled X_train:\n", X_train_scaled)
print("\nScaled X_test:\n", X_test_scaled)
'''
# Feature Scaling

