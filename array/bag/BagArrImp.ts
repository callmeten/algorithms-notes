/** 背包数组实现 */

class BagArrImp<Item> {

    private itemArr: Item[];
    private maxSize: number;
    private count: number;

    constructor() { 
        this.itemArr = [];
        this.count = 0;
        this.initArr(100);
    }

    private initArr(size) {
        for (let i = 0; i < size; i++) {
            this.itemArr[i] = null;
        }
    }

    private resizeArr(size: number) {
        if (size >= this.itemArr.length) {
            let oldArr: Item[] = this.itemArr;
            this.initArr(this.itemArr.length * 2);
            for (let i = 0; i < oldArr.length; i++) {
                this.itemArr[i] = oldArr[i];
            }
        }
        else if (size <= this.itemArr.length / 4) {
            let oldArr: Item[] = this.itemArr;
            this.initArr(this.itemArr.length / 2);
            for (let i = 0; i < oldArr.length; i++) {
                this.itemArr[i] = oldArr[i];
            }
        }
    }

    /**
     * add
     */
    public add(item: Item): void {
        this.itemArr[this.count++] = item;
        this.resizeArr(this.count);
    }

    public isEmpty(): boolean {
        return this.count <= 0;
    }

    public size(): number {
        return this.count;
    }
}