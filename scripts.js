function buttonPressed(){
    const fromSystem = document.getElementById("fromSelector");
    const toSystem = document.getElementById( "toSelector" );
    var toIndex = toSystem.options[toSystem.selectedIndex].value ;
    var selectIndex = fromSystem.options[fromSystem.selectedIndex].value ;
    var givenNumber = document.getElementById( "inputField" ).value;
    var givenNumberDec = Number(document.getElementById( "inputField" ).value);
    var result =  document.getElementById( "conversionResult" );

    if (selectIndex == "dec" && toIndex == "bin"){
        var convResult = givenNumberDec.toString(2) ; 
        result.innerHTML = givenNumberDec + " decimal in binary is: " + convResult ;
    }
    else if (selectIndex == "dec" && toIndex == "oct"){
        var convResult = givenNumberDec.toString(8)
        result.innerHTML = givenNumberDec + " decimal in octal is: " + convResult ;       
    }
    else if (selectIndex == "dec" && toIndex == "hex"){
        var convResult = givenNumberDec.toString(16)
        result.innerHTML = givenNumberDec + " decimal in hexadecimal is: " + convResult ;       
    }
    else if (selectIndex == "bin" && toIndex == "dec"){
        let binToBin = parseInt(givenNumber, 2) ;
        let resultDec = parseInt(binToBin, 10) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in decimal is: " + resultDec ;
        }
    }
    else if (selectIndex == "bin" && toIndex == "oct"){
        let binToBin = parseInt(givenNumber, 2) ;
        let resultOct = parseInt(binToBin, 10).toString(8) ;

        if( isNaN(resultOct) ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in octal is: " + resultOct ;   
        }
    }
    else if (selectIndex == "bin" && toIndex == "hex"){
        let binToBin = parseInt(givenNumber, 2) ;
        let resultHex = parseInt(binToBin, 10).toString(16) ;

        if( isNaN(resultHex) ){
            result.innerHTML = "Not a valid binary number!"
        }
        else{
            result.innerHTML = givenNumber + " binary in hexadecimal is: " + resultHex ;   
        } 
    }
    else if (selectIndex == "oct" && toIndex == "bin"){
        let octToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(octToDec, 10).toString(2) ;
        
        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in binary is: " + resultBin ;   
        }
    }
    else if (selectIndex == "oct" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in decimal is: " + resultBin ;   
        }
    }
    else if (selectIndex == "oct" && toIndex == "hex"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10).toString(16) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid octal number!"
        }
        else{
            result.innerHTML = givenNumber + " octal in hexadecimal is: " + resultBin ;   
        }
        
    }
    else if (selectIndex == "hex" && toIndex == "bin"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(2) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid hexadecimal number!"
        }
        
        result.innerHTML = givenNumber + " hexadecimal in binary is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid hexadecimal number!"
        }
        
        result.innerHTML = givenNumber + " hexadecimal in decimal is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "oct"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(8) ;

        if( isNaN(resultBin) ){
            result.innerHTML = "Not a valid hexadecimal number!"
        }
        
        result.innerHTML = givenNumber + " hexadecimal in octal is: " + resultBin ;   
    }
    
}