export enum Diet {
    LOW_CARB = "Low Carb",
    VEGETARIAN = "Végétarien",
    GLUTEN_FREE = "Gluten Free"
}

export namespace Diet {
    export function getValue(value: any) {
        if("Low Carb" === value) return Diet.LOW_CARB;
        if("Végétarien" === value) return Diet.VEGETARIAN;
        if("Gluten Free" === value) return Diet.GLUTEN_FREE;
    }
}