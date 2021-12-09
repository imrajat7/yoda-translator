var inputArea = document.getElementById("input-text-area-id");
var outputArea = document.getElementById("output-text-area-id");
var translateButton = document.getElementById("translate-button");

translateButton.addEventListener("click", () => {
    if (!inputArea.value) return;
    fetch(
        "https://api.funtranslations.com/translate/yoda.json?" +
            new URLSearchParams({
                text: inputArea.value,
            })
    )
        .then((response) => response.json())
        .then((result) => {
            outputArea.value = result?.contents?.translated;
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
});
