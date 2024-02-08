const joke = document.getElementById("joke");
const button = document.getElementById("button");

const url =
	"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
	fetch(url)
		.then((data) => data.json())
		.then((_item) => {
			// joke.textContent = "${_item.value.joke}";
			joke.innerHTML = `${_item.joke}`;
		});
};
button.addEventListener("click", getJoke);
getJoke();
