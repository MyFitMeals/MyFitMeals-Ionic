export enum Type {
    SUCRE = "Sucré",
    SALE = "Salé"
}

export namespace Type {
    export function getValue(value: any) {
        if("Sucré" === value) return Type.SUCRE;
        if("Salé" === value) return Type.SALE;
    }
}