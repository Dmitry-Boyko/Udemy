import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

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