export class FlagHelper {
    static getFlag(flag: string, attribute: string) {
		(game as Game).user?.character?.getFlag(flag, attribute);
    }

    static setFlag(flag: string, attribute: string, value: any) {
		(game as Game).user?.character?.setFlag(flag, attribute, value);
    }
}