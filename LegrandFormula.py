def largestPower(n, p):
     
    # Initialize result
    x = 0
 
    # Calculate x = n/p + n/(p^2) + n/(p^3) + ....
    while n:
        n /= p
        x += n
    return x