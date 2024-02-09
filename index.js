const joke = document.getElementById("joke");
const emoji = document.getElementById("emoji");
const button = document.getElementById("button");

// Function to generate a random emoji
function generateRandomEmoji() {
	const emojis = [
		"😀",
		"😂",
		"😊",
		"😎",
		"😜",
		"😇",
		"🤓",
		"😇",
		"😁",
		"🥳",
		"😋",
		"😌",
		"😴",
	];
	const randomIndex = Math.floor(Math.random() * emojis.length);
	return emojis[randomIndex];
}

const url =
	"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
	fetch(url)
		.then((data) => data.json())
		.then((_item) => {
			const emojis = generateRandomEmoji();

			joke.innerHTML = `${_item.joke}`;

			emoji.textContent = emojis;
		});
};

button.addEventListener("click", getJoke);
getJoke();
