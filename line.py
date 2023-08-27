def star (a=5):
    print(a)
    for i in range(a):
        # print(''*(a-i))
        print(' '*(a-(i*2)),end='')
        print('*'*i,end='')
        print('')




star(5)
print('a'*5)