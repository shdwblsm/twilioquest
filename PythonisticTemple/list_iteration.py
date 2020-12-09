import sys

order_of_succession = sys.argv

order_of_succession.pop(0)

number = len(order_of_succession)



for index, leader in enumerate(order_of_succession, start=1):
    
    print(f'{index}. {leader}')


