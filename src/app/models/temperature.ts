export enum Temperature {
    CHAUD = "Chaud",
    FROID = "Froid"
}

export namespace Temperature {
    export function getValue(value: any) {
        if("Chaud" === value) return Temperature.CHAUD;
        if("Froid" === value) return Temperature.FROID;
    }
}