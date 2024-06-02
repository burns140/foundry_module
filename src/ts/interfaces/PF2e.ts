export interface CharacterSheetPF2e {
    actor: CharacterPF2e;
}

interface CharacterPF2e {
    flags: any;
    getFlag(flag: string, attribute: string);
}