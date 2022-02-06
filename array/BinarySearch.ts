class Search {
    public static binarySearch(key: number, array: number[]) {

        let low: number = 0;
        let hi: number = array.length - 1;

        while(low <= hi) {
            let mid: number = low + (hi - low) / 2;

            if (key < array[mid] ) {
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
    }
}