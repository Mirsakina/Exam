let word = prompt("Bir söz daxil edin boyük və balaca hərflərdən istifadə edin")
function swapCase(word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
      let name = word[i];
      if (name == name.toUpperCase()) {
        result += name.toLowerCase();
      } else {
        result += name.toUpperCase();
      }
    }
    return result;
  }
console.log(swapCase(word))
  