function buttonPressed(){
    const fromSystem = document.getElementById("fromSelector");
    const toSystem = document.getElementById( "toSelector" );
    var toIndex = toSystem.options[toSystem.selectedIndex].value ;
    var selectIndex = fromSystem.options[fromSystem.selectedIndex].value ;
    var givenNumber = document.getElementById( "inputField" ).value;
    var result =  document.getElementById( "conversionResult" );

    if (selectIndex == "dec" && toIndex == "bin"){
        var convResult = givenNumber.toString(2);
        result.innerHTML = givenNumber + " in binary is: " + convResult ;
    }
    else if (selectIndex == "dec" && toIndex == "oct"){
        var convResult = givenNumber.toString(8)
        result.innerHTML = givenNumber + " in octal is: " + convResult ;       
    }
    else if (selectIndex == "dec" && toIndex == "hex"){
        var convResult = givenNumber.toString(16)
        result.innerHTML = givenNumber + " in hexadecimal is: " + convResult ;       
    }
    else if (selectIndex == "bin" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^01]/gi,""), 2) ;
        let resultBin = parseInt(binToDec, 10) ;
        let isBinNmb = true ;

        result.innerHTML = givenNumber + " binary in decimal is: " + resultBin ;
    }
    else if (selectIndex == "bin" && toIndex == "oct"){
        let binToOct = parseInt((givenNumber + "").replace(/[^01]/gi, ""), 2) ;
        let resultOct = parseInt(binToOct, 10).toString(8) ;
        
        result.innerHTML = givenNumber + " binary in octal is: " + resultOct ;   
    }
    else if (selectIndex == "bin" && toIndex == "hex"){
        let binToHex = parseInt((givenNumber + "").replace(/[^01]/gi,""), 2) ;
        let resultHex = parseInt(binToHex, 10).toString(16) ;
        
        result.innerHTML = givenNumber + " binary in hexadecimal is: " + resultHex ;   
    }
    else if (selectIndex == "oct" && toIndex == "bin"){
        let octToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(octToDec, 10).toString(2) ;
        
        result.innerHTML = givenNumber + " octal in binary is: " + resultBin ;   
    }
    else if (selectIndex == "oct" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10) ;
        
        result.innerHTML = givenNumber + " octal in decimal is: " + resultBin ;   
    }
    else if (selectIndex == "oct" && toIndex == "hex"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-7]/gi,""), 8) ;
        let resultBin = parseInt(binToDec, 10).toString(16) ;
        
        result.innerHTML = givenNumber + " octal in hexadecimal is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "bin"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(2) ;
        
        result.innerHTML = givenNumber + " hexadecimal in binary is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "dec"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10) ;
        
        result.innerHTML = givenNumber + " hexadecimal in decimal is: " + resultBin ;   
    }
    else if (selectIndex == "hex" && toIndex == "oct"){
        let binToDec = parseInt((givenNumber + "").replace(/[^0-9A-Fa-f]/gi,""), 16) ;
        let resultBin = parseInt(binToDec, 10).toString(8) ;
        
        result.innerHTML = givenNumber + " hexadecimal in octal is: " + resultBin ;   
    }
    
}