"""
Single Dimensional Array
"""
import numpy as np

my_list = [1,2,3]

arr = np.array(my_list)

print(arr)


"""
Multi Dimensional Array

"""

my_mat = [[1,2,3], [4,5,6], [7,8,9]]

mat = np.array(my_mat)

print(mat)


"""
Arrange 
"""

ran = np.arange(0,10)

print(ran)


"""
Zeros
"""
zer = np.zeros((2,3))

print(zer)

"""
Ones
"""
one = np.ones((3,4))
print(one)

"""
Line Space 
"""

lin = np.linspace(1,5,10)
print(lin)


"""
Eye
"""
ey = np.eye(4)
print(ey)


"""
Random
"""

ran1 = np.random.rand(5)
print(ran1)

ran2 = np.random.randn(5)
print(ran2)

ran3 = np.random.randint(1,100)
print(ran3)

"""
Reshape
"""
arr = np.arange(25)
print(arr)

ranarr = np.random.randint(0,50,10)
print(ranarr)

shape = arr.reshape(5,
5)
print(shape)

"""
Max and Min 
"""
maximum = ranarr.max()
minimum = ranarr.min()
arg1 = ranarr.argmax()
arg2 = ranarr.argmin()
print(maximum)
print(minimum)
print(arg1)
print(arg2)


sha = arr.shape
print(sha)

"""
Numpy Indexing and Selection
"""

arr_2d = np.array([[5,10,15],[20,25,30],[35,40,45],[50,55,60]])
print(arr_2d)