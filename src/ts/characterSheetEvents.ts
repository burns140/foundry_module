import { CharacterSheetPF2e } from "./interfaces/PF2e";
import Constants from "./Constants";

Hooks.on("renderCharacterSheetPF2e", (sheet: CharacterSheetPF2e, html: JQuery, character) => {
    const actor = sheet.actor;
    console.log(game);

    const optionSection = html.find(".sheet-body .option-toggles");
    const EVTargetSection = $(
        `<fieldset class="actor.sheet" style="display:flex;flex-direction:column;border:1px solid;border-radius:5px;padding:5px;"><legend>${Constants.EXPLOIT_VULNERABILITY}</legend></fieldset>`
    );
    optionSection.append(EVTargetSection);
});