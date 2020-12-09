import sys

firstNum = int(sys.argv[1])
secondNum = int(sys.argv[2])
sum = firstNum + secondNum

# print(firstNum, secondNum, sum)
# Sum less than or equal to zero


if sum <= 0:
    
    path = "You have chosen the path of destitution."
    print(path)
    
# num is 1-100, including 100
elif (sum >= 1) and (sum <= 100):
    path = "You have chosen the path of plenty."

    print(path)

# greater than 100
elif sum > 100:
    path = "You have chosen the path of excess."

    print(path)

else:
    print("Not sure how you got here, but OK.")