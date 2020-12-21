import './App.css';
import React, {useState, useEffect} from 'react'
import {Button, Container, Jumbotron} from 'react-bootstrap';



var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.txtBatchToggle = false;
        this.txtBatch = 0
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.step = 1;
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var fullTxt = this.toRotate[this.txtBatch].join(`<br/>`);

        if((fullTxt.substring(0, this.txt.length+1)[this.txt.length] === '<' && !(this.isDeleting))
            || this.txt.slice(-1) === '>'){
            this.step = 5
        }
        else{
            this.step = 1;
        }
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - this.step);
        } else {

        this.txt = fullTxt.substring(0, this.txt.length + this.step);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
        if(this.txt === ''){
            this.txtBatchToggle = !(this.txtBatchToggle)
            this.txtBatch = this.txtBatchToggle ? 1 : 0;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };



    // set up text to print, each item in array is new line
var aText = ["npm start hello.js",
"Hello, World!", "I am Priska Kohnen.", "A fullstack Web Developer."];
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(typewriter, 500);
  }
 } else {
  setTimeout(typewriter, iSpeed);
 }
}





function Home() {

     // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {    // Update the document title using the browser API
        window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('datatype');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

//typewriter();
    });
  return (
      <div className="Home d-flex flex-column justify-content-center">
          <Container className="shell">
              <h1><span className="cl"><span className="green">priska</span>:<span className="blue">~</span>$ </span>
                  <a href="" className="typewrite" data-period="2000"
                     datatype='[["npm start hello.js", "Hello, World!", "I am Priska Kohnen.", "A Fullstack Web Developer."],["This is just the beginning..."]]'>
                  <span className="wrap"/>
                  </a>
              </h1>
              {/*<h1>$ <span id="typedtext"></span></h1>*/}
            </Container>
      </div>
  );
}

export default Home;