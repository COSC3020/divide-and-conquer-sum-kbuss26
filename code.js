/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Jan. 29 2024
    Sources: 
    - https://stackoverflow.com/questions/32380989/how-do-i-display-the-base-of-logarithms-in-markdown#:~:text=The%20base%20of%20a%20logarithm%20is%20displayed%20as%20a%20subscript,displays%20log2(n).&text=this%20is%20the%20proper%20way%20to%20use%20log%20in%20markdown.,-%24log%7B_a
*/

// console.log(divideAndConquerSum([2,2,3,4]));

function divideAndConquerSum(a) {
    // Variable "l" to reduce clutter
    var l = a.length;

    // Default subarrays for assignment (made configurable to challenge myself!)
    var SUBARRAYS = 3;

    if (l >= SUBARRAYS) {
        var bounds = getArrayBounds(SUBARRAYS, l); // Division
        var recNums = []; // List of summed numbers that recursive calls will return

        // Recursive calls for each subdivision
        for (var i = 0; i < bounds.length; i++) {
            if (((bounds[i + 1] - 1) - bounds[i]) >= 0) {
                // console.log([bounds[i], bounds[i + 1]]); * Testing * Prints out bounds for recursive calls
                recNums.push(divideAndConquerSum(a.slice(bounds[i], bounds[i + 1])));
            }
        }

        return sumList(recNums); // Sums the summed numbers from recursive subarrays
    } else { return sumList(a); } // List is too small to be divided by n subarrays
}

// Helper function to sum a list of items (for small lists)
function sumList(b) {
    var l = b.length;
    switch(l) {
        case 0:
            return 0;
        default:
            return b[0] + sumList(b.slice(1,l));
    }
}

// Function to reduce main function clutter; grabs positions to split original array into
function getArrayBounds(subs, len) {
    var bounds = [];
    for (var i = 0; i <= subs; i++) {
        bounds.push(Math.floor(len * i / subs));
    }
    return bounds; 
}