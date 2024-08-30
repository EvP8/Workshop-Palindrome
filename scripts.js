const kazkokszodis = document.querySelector("input");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", palindromChecker);

function palindromChecker() {
    const wordVal = kazkokszodis.value;

    const wordLen = wordVal.length;

    let start = wordVal.substring(0, Math.floor(wordLen / 2)).toLowerCase();
    let end = wordVal.substring(wordLen - Math.floor(wordLen / 2)).toLowerCase();

    let flip = end.split("").reverse().join("");

    result.innerHTML = start === flip 
        ? `${wordVal.toUpperCase()} is a palindrome` 
        : `${wordVal.toUpperCase()} is NOT a palindrome`;

    // const reverse = wordVal.split("").reverse().join("")
    
    // result.innerHTML = start === flip 
    //     ? `${wordVal.toUpperCase()} is a palindrome` 
    //     : `${wordVal.toUpperCase()} is NOT a palindrome`;
}
