function findFirstStringInBracket(str){
    let result = '';

    if(str && typeof str === "string"){
        let indexFirstBracketFound = str.indexOf("(");
        let wordsAfterFirstBracket = str.substr( indexFirstBracketFound+1 );
        
        if(wordsAfterFirstBracket){
            let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
            
            if(indexClosingBracketFound) result += wordsAfterFirstBracket.substring(0,indexClosingBracketFound);
        }
    }
    return result;
                
}

console.log(findFirstStringInBracket('asdasidasdssasas'))
console.log(findFirstStringInBracket(123))