var Search = /** @class */ (function () {
    function Search() {
    }
    Search.binarySearch = function (key, array) {
        var low = 0;
        var hi = array.length - 1;
        while (low <= hi) {
            var mid = low + (hi - low) / 2;
            if (key < array[mid]) {
                hi = mid - 1;
            }
            else if (key > array[mid]) {
                low = mid + 1;
            }
            else {
                return mid;
            }
        }
        return -1;
    };
    return Search;
}());
