interface PF2eChatMessage extends ChatMessage {
    rolls: Roll[];
}

interface UserRoll {
    value: number;
    user: string;
}

const averageRolls = new Map<number, UserRoll[]>([
    [4, []],
    [6, []],
    [8, []],
    [12, []],
    [20, []],
    [100, []]
]);

Hooks.on("renderChatMessage", (message, html, data) => {
    console.log("renderChatMessage");
    const pfMessage = message as PF2eChatMessage;
    if (pfMessage.rolls.length == 0) {
        return;
    }

    const roller = data.author?.name || "undefined";
    const dice = pfMessage.rolls[0].dice;
    for (const die of dice) {
        const dieType = die.faces;
        const rollValues = die.results.map(r => r.result);
        const userRolls = BuildUserRollsFromRollsArray(rollValues, roller);

        const currentValues = averageRolls.get(dieType);
        if (currentValues) {
            averageRolls.set(dieType, [...currentValues!, ...userRolls]);
        }
    }
});

function CalculateAverageRolls(user = ""): Map<number, number> {
    const averages = new Map<number, number>();
    for (const [dieType, rolls] of averageRolls) {
        const rollsForCalculation = user !== "" ? rolls.filter(r => r.user === user) : rolls;
        const total = rollsForCalculation.reduce((acc, r) => acc + r.value, 0);
        const average = total / rollsForCalculation.length;
        averages.set(dieType, average);
    }

    return averages;
}

function BuildUserRollsFromRollsArray(rolls: number[], roller: string): UserRoll[] {
    const userRolls: UserRoll[] = [];
    for (const roll of rolls) {
        userRolls.push({
            value: roll,
            user: roller
        });
    }

    return userRolls;
}