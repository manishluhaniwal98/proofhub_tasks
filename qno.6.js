function count(string,char) {
    var re = new RegExp(char,"gi");
    return string.match(re).length;
   } 
   var proof = "JavaScript was created by Brendan Eich in 1995 to give web pages a little more pep than the <blink> tag could provide. Today it has far more powerful uses and companies like Google and Facebook use JavaScript to build complex desktop-like web applications. With the launch of Node.js, It has also become one of the most popular languages for building server-side software. Today, even the web isn’t big enough to contain JavaScript’s versatility. I believe that you are already aware of these facts and this has made you land on this JavaScript Interview Questions article.";
   console.log(count(proof,'a'));