function binarySearch(array, l, r, x){
    if (r >= l) {
        let mid = l + Math.floor((r - l) / 2);
 
        // If the element is present at the middle
        // itself
        if (array[mid] == x)
            return mid;
 
        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (array[mid] > x)
            return binarySearch(array, l, mid - 1, x);
 
        // Else the element can only be present
        // in right subarray
        return binarySearch(array, mid + 1, r, x);
    }
 
    // We reach here when element is not
    // present in array
    return -1;
}