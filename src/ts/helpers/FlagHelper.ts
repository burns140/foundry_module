import Constants from "../Constants";

export class FlagHelper {
	static getFlag(flag: string, attribute: string) {
		(game as Game).user?.character?.getFlag(flag, attribute);
	}

	static setFlag(flag: string, attribute: string, value: any) {
		(game as Game).user?.character?.setFlag(flag, attribute, value);
	}

	static InitializeFlags() {
		FlagHelper.setFlag(Constants.MODULE_NAME, Constants.FLAGS.EV_ACTIVE, false);
		FlagHelper.setFlag(Constants.MODULE_NAME, Constants.FLAGS.EV_TARGET, "");
		FlagHelper.setFlag(Constants.MODULE_NAME, Constants.FLAGS.EV_STATE, Constants.LABELS.INACTIVE);
	}
}