function solve(array) {
    /**
     * 
     * @param {*} splittedWord [string] 
     * @returns [string] from each word
     */
    const split = (word) => {
        const splittedWord = []; 
        for (let j = 0; j < word.length; j++) {
            splittedWord.push(word[j])
        }
        return splittedWord
    };
    
    /**
     * 
     * @param {*} splittedWord [string] 
     * @returns string of sorted word
     */
    const sort = (splittedWord) => {
        let { length } = splittedWord;
        let result = '';

        for (let j = 0; j < length; j++) {
            for (let k = 0; k < length; k++) {
                
                if (splittedWord[k] > splittedWord[k + 1]) {
                    let tmp = splittedWord[k];
                    splittedWord[k] = splittedWord[k + 1];
                    splittedWord[k + 1] = tmp;
                }
            }
        }

        for (let i = 0; i < splittedWord.length; i++) result += splittedWord[i]
        return result
    };

    let result = [];

    // iterate each letter from the array
    for (let i = 0; i < array.length; i++) {
        let anagramsGroup = [];
        let firstWord = array[i]

        // split and join each letter for later will be matched if they are anagrams or not
        let arrayOfFirstWords = split(firstWord);
        let sortedFirstWord = sort(arrayOfFirstWords);

        // do the checking on each word and grouping them based on the letter
        for (let j = 0; j < array.length; j++) {
            let arrayOfSecondWords = split(array[j]);
            let sortedSecondWord = sort(arrayOfSecondWords);

            // to adjust the iteration stay on track
            if (i === j) i--;
            // if the letters have same value, then its an anagram, so push it to anagramsGroup and remove the letter from array  
            if (sortedFirstWord === sortedSecondWord) {
                anagramsGroup.push(array[j]);
                array.splice(j,1);
                j--;
            }
        }

        result.push(anagramsGroup);
    }
    return result;
}

const test = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

console.log(solve(test))