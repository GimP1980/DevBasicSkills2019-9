console.log("Give a number, this program will convert it to a different base:");

process.stdin.on( "data", function( input_from_user ){
    var usrNmbr = Number(input_from_user);

    console.log( usrNmbr.toString(2) + " this is your number in binary.");
    console.log( usrNmbr.toString(8) + " this is your number in Octal.");
    console.log( usrNmbr.toString(16) + " this is your number in Hexadecimal.");
});