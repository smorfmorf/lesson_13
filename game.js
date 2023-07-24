const game = (function () {
    let userScore = 0;
    let computerScore = 0;

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getUserChoice() {
        const userChoice = prompt("Выберите: камень, ножницы или бумага?");
        if (!userChoice) {
            const confirmExit = confirm("Вы уверены, что хотите выйти?");
            if (confirmExit) {
                showResult();
                return;
            } else {
                getUserChoice(); // Рекурсивно запускаем функцию снова
            }
        } else {
            return userChoice.toLowerCase();
        }
    }

    function getComputerChoice() {
        const choices = ["камень", "ножницы", "бумага"];
        const randomIndex = getRandomIntInclusive(0, 2);
        return choices[randomIndex];
    }

    function playRound() {
        const userChoice = getUserChoice();
        if (!userChoice) return;

        const computerChoice = getComputerChoice();

        if (
            (userChoice === "камень" && computerChoice === "ножницы") ||
            (userChoice === "ножницы" && computerChoice === "бумага") ||
            (userChoice === "бумага" && computerChoice === "камень")
        ) {
            userScore++;
            console.log(`Вы победили! Выбор компьютера: ${computerChoice}`);
        } else if (userChoice === computerChoice) {
            console.log(`Ничья! Выбор компьютера: ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`Вы проиграли! Выбор компьютера: ${computerChoice}`);
        }

        playRound(); // Рекурсивно запускаем игру снова
    }

    function showResult() {
        console.log("Игра окончена!");
        console.log(`Ваш счет: ${userScore}`);
        console.log(`Счет компьютера: ${computerScore}`);
    }

    return {
        startGame: function () {
            console.log("Игра начинается!");
            playRound();
        },
    };
})();
