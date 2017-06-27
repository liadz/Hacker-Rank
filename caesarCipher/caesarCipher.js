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

function main() {
    var n = parseInt(readLine());
    var s = readLine();
    var k = parseInt(readLine());
    
    var valA = "a".charCodeAt(0);
    var temp;
    var added;
    var realK = k % 26;
    var result = "";
    //console.log(valA);
    
    for(var i = 0; i < n; i++) {
        temp = s.charAt(i).charCodeAt(0);
        
        if(s.charAt(i) == s.charAt(i).toLowerCase()) {
            valA = "a".charCodeAt(0);
        } else {
            valA = "A".charCodeAt(0);
        }
        
        if(temp - valA >= 0 && temp - valA <= 25) {
            added = temp + realK;
            if(added - valA > 25) {
                added = valA + ((added - valA) - 26);
            }
        } else {
            added = temp;
        }
        //console.log(added);
        result = result.concat(String.fromCharCode(added));
    }
    console.log(result);

}
