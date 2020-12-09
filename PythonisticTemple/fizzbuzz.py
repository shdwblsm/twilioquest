import sys

numbers = sys.argv
numbers.pop(0)

for number in numbers:
    number = int(number)
    
    if (number % 5) == 0 and number % 3 == 0:
        print(f"fizzbuzz")
    
    elif number % 3 == 0:
        print(f"fizz")
    
    elif number % 5 == 0:
        print(f"buzz")

    else:
        print(number)

