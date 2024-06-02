import Constants from "./Constants";
import { FlagHelper } from "./helpers/FlagHelper";

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});

Hooks.on("canvasReady", () => {
	// @ts-ignore
	const classNameArr = (game as Game).user?.character?.class.name.split(" ") ?? [];
	if (classNameArr.includes("Thaumaturge")) {
		// @ts-ignore
		(game as Game).user?.character?.sheet._render(true);

		FlagHelper.InitializeFlags();
	}
})