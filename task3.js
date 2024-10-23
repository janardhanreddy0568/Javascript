var fruits = ['apple','banana','orange'];
a=fruits.join(" , ")
console.log('"'+a+'"')
var numbers = [1,2,3,4,5];
b=numbers.join("-")
console.log('"'+b+'"')
var chers = ['H','e','l','l','o']
c=chers.join('')
console.log('"'+c+'"')
var text = 'JavaScript is Awesome';
d=text.slice(0,10)
console.log('"'+d+'"')
var sentence = 'Frontend Development';
e=sentence.slice(-11)
console.log('"'+e+'"')
var sentence = 'I love learning Javascript!';
f=sentence.slice(7,15)
console.log('"'+f+'"')
var data = '2024-10-21';
console.log(data.split("-"))
var text = 'I love Javascript Programming';
console.log(text.split(" ",2))
let url = 'https://www.example.com/path/page.html';
console.log(url.split("/"))