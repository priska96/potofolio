import './App.css';
import React, {useEffect} from 'react'
import {Container} from 'react-bootstrap';



let TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.txtBatchToggle = false;
        this.txtBatch = 0
        this.el = el;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.step = 1;
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        let fullTxt = this.toRotate[this.txtBatch].join(`<br/>`);
        if (this.isDeleting) {
            this.txt = '';
        }
        else if (this.txt.length === 13 && this.txtBatch === 0){
            let end = fullTxt.lastIndexOf('$')
            this.txt = fullTxt.substring(0, end+2);
            console.log(this.txt.length)
        }
        else {
            this.txt = fullTxt.substring(0, this.txt.length + this.step);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        delta = 500;
        }
        if(this.txt === ''){
            this.txtBatchToggle = !(this.txtBatchToggle)
            this.txtBatch = this.txtBatchToggle ? 0 : 0;
        }
        if(this.txt.length === 190){
            delta = 700
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

function Home() {

     // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {    // Update the document title using the browser API
        window.onload = function() {
        let elements = document.getElementsByClassName('typewrite');
        for (let i=0; i<elements.length; i++) {
            let toRotate = elements[i].getAttribute('datatype');
            toRotate = JSON.parse(toRotate)
            toRotate[0].push('<span><span style="color:lawngreen;">priska</span>:<span style="color:mediumslateblue;">~</span>$ clear')
            let period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], toRotate, period);
            }
        }
        // INJECT CSS
        let css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

//typewriter();
    });
  return (
      <div className="Home d-flex flex-column justify-content-center">
          <Container fluid className="shell">
              <h1><span className="cl"><span className="green">priska</span>:<span className="blue">~</span>$ </span>
                  <a href="/" className="typewrite" data-period="2000"
                      datatype='[["node hello.js", "Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."]]' aria-label="node hello.js Hello, World! I am Priska Kohnen. A full-stack Web Developer. clear">{/*,["This is just the beginning..."]]'>*/}
                  <span className="wrap" aria-hidden="true"/>
                  </a>
              </h1>
              {/*<h1>$ <span id="typedtext"></span></h1>*/}
            </Container>
      </div>
  );
}

export default Home;





    // set up text to print, each item in array is new line
let aText = ["node hello.js",
"Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."];
let iSpeed = 100; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = aText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 let destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ === iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex !== aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout(typewriter, 500);
  }
 } else {
  setTimeout(typewriter, iSpeed);
 }
}




