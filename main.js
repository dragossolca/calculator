"use strict";
var myArgs = process.argv.slice(2);
var operator = myArgs.pop();
var cowsay = require("cowsay");
var fs = require("fs");
var contents = fs.readFileSync(__dirname+'/package.json');
var jsonContent = JSON.parse(contents);
var options = ["help", "+", "-", "mul", "div", "mod", "sq", "abs", "pwr", "sort", "rev", "max", "min", "uniq", "cos", "sin"];

switch (operator) {
    case undefined:
        console.log(cowsay.say({
            text : "Calculator, Author: "+jsonContent.author,
        }));
        for(var opt of options){
            console.log(opt);
        }
        break;
    case 'help':
        console.log(cowsay.say({
            text : "Calculator, Author: "+jsonContent.author,
        }));
        for(var opt of options){
            console.log(opt);
        }
        break;
    case '+':
        if(myArgs.length<2)
            console.log("ERROR: multiply command uses at least 2 parameters");
        else if(myArgs[myArgs.length-1] === "complex") {
            myArgs.pop();
            var a = 0;
            var b = 0;
            for (var i = 0; i < myArgs.length; i ++) {
                if(i % 2 === 0)
                    a += parseFloat(myArgs[i]);
                else
                    b += parseFloat(myArgs[i]);
            }
            if(b < 0) {
                var result = a + "" + b + "i";
            }
            else if(b===0) {
                var result = a;
            }
            else {
                var result = a + "+" + b + "i";
            }
            console.log(result);
        }
        else {
            var result = 0;
            for(var number of myArgs)
                result +=parseFloat(number);
            console.log(parseFloat(result));
        }

        break;
    case '-':
        if(myArgs.length<2)
            console.log("ERROR: multiply command uses at least 2 parameters");
            else if(myArgs[myArgs.length-1] === "complex") {
                myArgs.pop();
                var a = parseFloat(myArgs[0]);
                var b = parseFloat(myArgs[1]);
                for (var i = 2; i < myArgs.length; i ++) {
                    if(i % 2 === 0)
                        a -= parseFloat(myArgs[i]);
                    else    
                        b -= parseFloat(myArgs[i]);
                }
                if(b < 0) {
                    var result = a + "" + b + "i";
                }
                else {
                    var result = a + "+" + b + "i";
                }
                console.log(result);
            }
        else {
            var result = parseFloat(myArgs[0]);
            for(var i = 1; i < myArgs.length; i++)
                result -=parseFloat(myArgs[i]);
            console.log(parseFloat(result));
        }
        break; 
    case 'mul':
        if(myArgs.length<2)
            console.log("ERROR: multiply command uses at least 2 parameters");
            else if(myArgs[myArgs.length-1] === "complex") {
                myArgs.pop();
                var a1 = parseFloat(myArgs[0]);
                var b1 = parseFloat(myArgs[1]);
                var a2 = parseFloat(myArgs[2]);
                var b2 = parseFloat(myArgs[3]);
                var re = a1 * a2 - b1 * b2;
                var im = a1 * b2 + a2 * b1;
                var re_c = re;
                var im_c = im;
                for (var i = 4; i < myArgs.length-1; i+=2) {
                    a1 = parseFloat(myArgs[i]);
                    b1 = parseFloat(myArgs[i+1]);
                    //console.log(a1+" "+b1);
                    re = a1 * re_c - b1 * im_c;
                    im = a1 * im_c + re_c * b1;
                    re_c = re;
                    im_c = im;

                    
                }
            if(im < 0) {
                var result = re + "" + im + "i";
            }
            else if(im > 0) {
                var result = re + "+" + im + "i";
            }
            else {
                var result = re;
            }
            console.log(result);
        }
        else {
            var result = 1;
            for(var number of myArgs)
                result*=parseFloat(number);
            console.log(parseFloat(result));
        }
        break;
    case 'div':
        if(myArgs.length<2)
            console.log("ERROR: multiply command uses at least 2 parameters");
        else {
            var result = myArgs[0];
            for(var i = 1; i < myArgs.length; i++)
                result /= parseFloat(myArgs[i]);
            console.log(result);
        }
        break;
    case 'mod':
        if(myArgs.length!=2)
            console.log("ERROR: multiply command uses at least 2 parameters");
        else {
            var result = parseFloat(myArgs[0] % myArgs[1]);
            console.log(result);
        }
        break; 
    case 'sq':
        if(myArgs.length!=1)
            console.log("ERROR: sq command uses at least 1 parameters");
        else {
            var result = Math.sqrt(myArgs[0]);
            console.log(result);
        }
        break;
    case 'abs':
        if(myArgs.length!=1)
            console.log("ERROR: abs command uses at least 1 parameters");
        else {
            var result = Math.abs(myArgs[0]);
            console.log(result);
        }
        break;
    case 'pwr':
        if(myArgs.length!=2)
            console.log("ERROR: pwr command uses at least 2 parameters");
        else {
            var result = Math.pow(myArgs[0], myArgs[1]);
            console.log(result);
        }
        break; 
    case 'sort':
        if(myArgs.length) {
            var result = "";
            myArgs.sort(function(a, b) {
                return a - b;
            });
            for(var i of myArgs) 
                result= result + i + " ";
            
            console.log(result);

        }            
        else {
            console.log("ERROR: sort command uses at least 1 parameters");
        }
        break;
    case 'rev':
        if(myArgs.length) {
            myArgs.reverse();
            var result = "";
            for(var i of myArgs) 
                result= result + i + " ";
            
            console.log(result);
        }
        else {
            console.log("ERROR: rev command uses at least 1 parameters");
        }
        break;
    case 'max':
        if(myArgs.length) {
            var max = myArgs[0];
            for(var i = 1; i<myArgs.length ;i++){
                if(parseInt(myArgs[i]) > parseInt(max))
                    max = myArgs[i];
            }
            console.log(max);
        }
        else {
            console.log("ERROR: multiply command uses at least 2 parameters");

        }
        break; 
    case 'min':
        if(myArgs.length) {
            var min = myArgs[0];
            for(var i = 1; i<myArgs.length ;i++){
                if(parseInt(myArgs[i]) < parseInt(min))
                    min = myArgs[i];
            }
            console.log(min);
        }
        else {
            console.log("ERROR: multiply command uses at least 2 parameters");

        }
        break;
    case 'uniq':
        if(myArgs.length){
            var result = "";
            for(var i = 0;i<myArgs.length-1;i++)
                for(var j=i+1;j<myArgs.length;j++)
                    if(parseFloat(myArgs[i])===parseFloat(myArgs[j])) {
                        myArgs.splice(j,1);
                        i--;
                    }
            for(var i of myArgs) 
                result = result + i + " ";
            console.log(result);
            
        }
        else {
            console.log("ERROR: uniq command uses at least 1 parameters");
        }
        break;
    case 'cos':
        if(myArgs.length!=1)
            console.log("ERROR: multiply command uses at least 2 parameters");
        else {
            var result = Math.cos(myArgs[0]);
            console.log(result);
        }
        break; 
    case 'sin':
        if(myArgs.length!=1)
            console.log("ERROR: multiply command uses at least 2 parameters");
        else {
            var result = Math.sin(myArgs[0]);
            console.log(result);
        }
        break;
    default:
        console.log('ERROR: this command does not exist, use help to see available commands');
    }