process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////
function size(first, second, arr, size) {
    var current = first;
    var next = second;
    var temp = "";
    
    //console.log("current: " + current);
    //console.log("next: " + next);
    
    var result = 1;
    
    for(var k = 1; k < size; k++) {
        if(arr.charAt(k) == current) {
            return 0;
        } else if(arr.charAt(k) == next) {
            temp = current;
            current = next;
            next = temp;
            result++;
            //console.log("current: " + current);
            //console.log("next: " + next);
        }
    }
    return result;
}

function maxLen(n, s){
    // Complete this function
    var testStr = s.repeat(1);
    var char;
    var allChar = [];
    
    while(testStr.length > 0) {
        char = testStr.charAt(0);
        allChar.push(char);
        testStr = testStr.replace(new RegExp(char, "g"), "");
    }
    var max = 0;
    var tempMax = 0;
    var indexI = 0;
    var indexJ = 0
    
    var arr;
    
    for(var i = 0; i < allChar.length - 1; i++) {
        for(var j = i+1; j < allChar.length; j++) {
            indexI = s.indexOf(allChar[i]);
            indexJ = s.indexOf(allChar[j]);
            //console.log("i: " + allChar[i]);
            //console.log("j: " + allChar[j]);
            if(indexI < indexJ) {
                arr = s.slice(indexI, n);
                tempMax = size(allChar[i], allChar[j], arr, arr.length);
            } else {
                arr = s.slice(indexJ, n);
                tempMax = size(allChar[j], allChar[i], arr, arr.length);
            }
            if(tempMax > max) max = tempMax;
        }
    }
    
    return max;
    
}

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var result = maxLen(n, s);
    process.stdout.write(""+result+"\n");

}
