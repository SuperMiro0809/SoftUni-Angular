abstract class Melon {
    public weight: number;
    public melonSort: string;
    public _elementIndex: number;
    
    constructor(weight: number, melonSort: string) {
        this.melonSort = melonSort;
        this.weight = weight;
        this._elementIndex = this.weight * this.melonSort.length;
    }

    get elementIndex(): number {
        return this._elementIndex;
    }

}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        
    }

    public toString():string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }

}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
     
    }

    public toString():string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Earthmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        
    }

    public toString():string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Airmelon extends Melon {

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
       
    }

    public toString():string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }

}

class Melolemonmelon extends Watermelon {
    public element:string;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.element = 'Water';
    }

    public toString():string {
        return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }

    public morph() {
        this.element = this.change(this.element);
    }

    public change(type:string):string {
        let obj:object = {
            'Water': 'Fire',
            'Fire': 'Earth',
            'Earth': 'Air',
            'Air': 'Water'
        };

        return obj[type];
    }
}

let watermelon : Melolemonmelon = new Melolemonmelon(12.5, "Kingsize");
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
watermelon.morph();
console.log(watermelon.toString());
