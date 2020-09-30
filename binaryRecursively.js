// binary search recursively

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29]

const binarySearch = function(arr, target, left, right) {
    if (left === undefined) {
        left = 0; // first index of array
        right = arr.length - 1; // last index of array
    }

    if (left > right) {
        return;
    }

    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) {
        return middle;
    } else {
        // let newArr = arr / 2;
        // binarySearch(newArr, target)

    
        if(target < arr[middle]) {
            return binarySearch(arr, target, left, middle - 1);
        } else {
            // let newArrayGreater = [arr[middle + 1], right];
            // return binarySearch(newArrayGreater);
            return binarySearch(arr, target, middle + 1, right);
        }
        
    }

}

console.log(binarySearch(testArray, 19));

