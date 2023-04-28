/* Have the function QuestionsMarks(str) 
take the str string parameter, 
which will contain single digit numbers, letters, and 
question marks, and 
check if there are exactly 3 question marks 
between every pair of two numbers that
add up to 10. 

If so, then your program should return 
the string true, otherwise it should 
return the string false. 
If there aren't any two numbers that add up to 10 
in the string, then your program should return 
false as well. */


let str = "1???adbg9dfr5???3";
console.log("\n\nThe value returned by QuestionMarks(str) function is: " + QuestionMarks(str) + "\n\n");



function QuestionMarks(str){
    let pattern = /\d[a-zA-Z?]+\d/g;
    let result = "False";

    const array = [...str.matchAll(pattern) ];

    console.log(`Here is the list of pairs found in string(${str}):`);
    
    for(item of array){
        pair = item[0];
        let sum = parseInt(pair[0]) + parseInt(pair[pair.length - 1]);
        let questionMarks = 0;
        let passed = false;

        for(let i = 0; i < pair.length; i++){
            if(pair[i] == '?'){
                questionMarks++;
            }
        }

        if(sum == 10){

            if(questionMarks == 3){
                result = "True";
                passed = true;
            }

        }

        if(passed){
            console.log(`     * (Passed) Pair: ${pair}, Sum: ${sum}, Question Marks: ${questionMarks}`);
        }else{
            console.log(`     * Pair: ${pair}, Sum: ${sum}, Question Marks: ${questionMarks}`);
        }

        
        
    }

    return result;
}