export interface IValueItem {
    mId: any
    mName: any
}

export class ValueList {
    private _array: Array<IValueItem>;

    get length(): number { return this._array.length; }

    constructor(array: Array<IValueItem>) {
        this._array = array;
    }
/*
    public length(): number
    {
        return this._array.length;
    }*/

    public getItem(index: number) { // Used for items source in list picker
        return this.getText(index);
    }

    public getText(index: number): string {

        if (index === undefined || index < 0 || index >= this._array.length) {
            return "";
        }
        if(this._array[index])
        {
            return this._array[index].mName;
        }
        return null;
    }

    public getValue(index: number) {
        if (index === undefined || index < 0 || index >= this._array.length) {
            return null;
        }
        if(this._array[index])
        {
            return this._array[index].mId;
        }
        return null;
    }

    public getIndex(value: any): number {
        for (let i = 0; i < this._array.length; i ++) {
            if (this.getValue(i) == value) {
                return i;
            }
        }

        return -1;
    }
}