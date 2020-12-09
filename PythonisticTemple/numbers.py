import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number
result_difference = first_number - second_number
result_product = first_number * second_number
result_quotient = first_number / second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
print(f"{second_number} minus {first_number} equals {result_difference}")
print(f"{first_number} times {second_number} equals {result_product}")
print(f"{first_number} divided by {second_number} equals {result_quotient}")

