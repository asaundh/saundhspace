//this is my first p5 thing


//console.log("Hello its me!");

let x, y; 

let page1; 

let Jae;
let Jae1;
let Sai;
let Sai1;
let Miles;
let Miles1;
let Alexa;
let Alexa1;
let Zen;
let Zen1;
let Heart;
let Heart1;
let Oreo;
let Oreo1;
let Drishti;
let Drishti1;
let Gary;
let Gary1;
let Body;
let Body1;
let Nick;
let Nick1;
let Naked;
let Naked1;
let Monali;
let Monali1;
let Feature;
let Feature1;
let Dad;
let Dad1;
let Tomeka;
let Tomeka1;
let Pot;
let Pot1;
let Can;
let Can1;
let Jaren;
let Jaren1;
let Print;
let Print1;
let Curve;
let Curve1;
let Star;
let Star1;
let Disc;
let Disc1;
let Twins;
let Twins1;
let Collage;
let Collage1;
let Aryaa;
let Aryaa1;
let Priyanka;
let Priyanka1;
let Silk;
let jThing, sThing, mThing, aThing, zThing, hThing, oThing, dThing, gThing, bThing, nThing, nnThing, mmThing, fThing, ddThing, tThing, pThing, cThing, jjThing, ppThing, ccThing, ssThing, dddThing, ttThing, cccThing, aaThing, pppThing;

function preload(){
        
        Jae = loadImage('data/Jae.png');
        Jae1 = loadImage('data/Jae1.png');
        Sai = loadImage('data/Sai.png');
        Sai1 = loadImage('data/Sai1.png');
        Miles = loadImage('data/Miles.png');
        Miles1 = loadImage('data/Miles1.png');
        Alexa = loadImage('data/Alexa.png');
        Alexa1 = loadImage('data/Alexa1.png');
        Zen = loadImage('data/Zen.png');
        Zen1 = loadImage('data/Zen1.png');
        Heart = loadImage('data/Heart.png');
        Heart1 = loadImage('data/Heart1.png');
        Oreo = loadImage('data/Oreo.png');
        Oreo1 = loadImage('data/Oreo1.png');
        Drishti = loadImage('data/Drishti.png');
        Drishti1 = loadImage('data/Drishti1.png');
        Gary = loadImage('data/Gary.png');
        Gary1 = loadImage('data/Gary1.png');
        Body = loadImage('data/Body.png');
        Body1 = loadImage('data/Body1.png');
        Nick = loadImage('data/Nick.png');
        Nick1 = loadImage('data/Nick1.png');
        Naked = loadImage('data/Naked.png');
        Naked1 = loadImage('data/Naked1.png');
        Monali = loadImage('data/Monali.png');
        Monali1 = loadImage('data/Monali1.png');
        Feature = loadImage('data/Feature.png');
        Feature1 = loadImage('data/Feature1.png');
        Dad = loadImage('data/Dad.png');
        Dad1 = loadImage('data/Dad1.png');
        Tomeka = loadImage('data/Tomeka.png');
        Tomeka1 = loadImage('data/Tomeka1.png');
        Pot = loadImage('data/Pot.png');
        Pot1 = loadImage('data/Pot1.png');
        Can = loadImage('data/Can.png');
        Can1 = loadImage('data/Can1.png');
        Jaren = loadImage('data/Jaren.png');
        Jaren1 = loadImage('data/Jaren1.png');
        Print = loadImage('data/Print.png');
        Print1 = loadImage('data/Print1.png');
        Curve = loadImage('data/Curve.png');
        Curve1 = loadImage('data/Curve1.png');
        Star = loadImage('data/Star.png');
        Star1 = loadImage('data/Star1.png');
        Disc = loadImage('data/Disc.png');
        Disc1 = loadImage('data/Disc1.png');
        Twins = loadImage('data/Twins.png');
        Twins1 = loadImage('data/Twins1.png');
        Collage = loadImage('data/Collage.png');
        Collage1 = loadImage('data/Collage1.png');
        Aryaa = loadImage('data/Aryaa.png');
        Aryaa1 = loadImage('data/Aryaa1.png');
        Priyanka = loadImage('data/Priyanka.png');
        Priyanka1 = loadImage('data/Priyanka1.png');

        
       
}

function setup() {
        createCanvas(windowWidth, windowHeight); //width and height of our canvas
      /*   image(Jae,50,100);
        image(Jae1,50,100); */
        

        jThing = new ImageButton(Jae,Jae1,0,0,Jae.width*.4,Jae.height*.4);
        sThing = new ImageButton(Sai,Sai1,600,150,Sai.width*.2,Sai.height*.2);
        mThing = new ImageButton(Miles,Miles1,600,300,Miles.width*.8,Miles.height*.8);
        aThing = new ImageButton(Alexa,Alexa1,400,500,Alexa.width*.6, Alexa.height*.6);
        zThing = new ImageButton(Zen,Zen1,500,100,Zen.width*.4, Zen.height*.4);
        hThing = new ImageButton(Heart,Heart1,690,220,Heart.width*.4, Heart.height*.4);
        oThing = new ImageButton(Oreo,Oreo1,200,10,Oreo.width*.3, Oreo.height*.2);
        dThing = new ImageButton(Drishti,Drishti1,790,310,Drishti.width*.3, Drishti.height*.3);
        gThing = new ImageButton(Gary,Gary1,0,450,Gary.width*.5, Gary.height*.5);
        bThing = new ImageButton(Body,Body1,450,300,Body.width*.4, Body1.height*.4);
        nThing = new ImageButton(Nick,Nick1,350,200,Nick.width*.5, Nick.height*.5);
        nnThing = new ImageButton(Naked,Naked1,950,400,Naked.width*.8, Naked.height*.8);
        mmThing = new ImageButton(Monali,Monali1,500,2,Monali.width*.1, Monali.height*.1);
        fThing = new ImageButton(Feature,Feature1,400,80,Feature.width*.9, Feature.height*.9);
        ddThing = new ImageButton(Dad,Dad1,200,80,Dad.width*.4, Dad.height*.4);
        tThing = new ImageButton(Tomeka,Tomeka1,1020,0,Tomeka.width*.2, Tomeka.height*.2);
        pThing = new ImageButton(Pot,Pot1,900,300,Pot.width*.4, Pot.height*.3);
        cThing = new ImageButton(Can,Can1,1000,200,Can.width*.8, Can.height*.8);
        jjThing = new ImageButton(Jaren,Jaren1,1100,100,Jaren.width*.7,Jaren.height*.7);
        ppThing = new ImageButton(Print,Print1,1100,100,Print.width*.5,Print.height*.5);
        ccThing = new ImageButton(Curve,Curve1,1200,00,Curve.width*.7,Curve.height*.7);
        ssThing = new ImageButton(Star,Star1,800,100,Star.width*.9,Star.height*.9);
        dddThing = new ImageButton(Disc,Disc1,550,200,Disc.width*.8,Disc.height*.8);
        ttThing = new ImageButton(Twins,Twins1,90,490,Twins.width*.6,Twins.height*.6);
        cccThing = new ImageButton(Collage,Collage1,800,0,Collage.width*.9,Collage.height*.6);
        aaThing = new ImageButton(Aryaa,Aryaa1,0,0,Collage.width*.9,Collage.height*.9);
        pppThing = new ImageButton(Priyanka,Priyanka1,0,0,Collage.width*.7,Collage.height*.6);

}


function draw(){
        background(255);
        jThing.mouseOver();
        jThing.show();
        sThing.mouseOver();
        sThing.show();
        mThing.mouseOver();
        mThing.show();
        aThing.mouseOver();
        aThing.show();
        zThing.mouseOver();
        zThing.show();
        hThing.mouseOver();
        hThing.show();
        oThing.mouseOver();
        oThing.show();
        dThing.mouseOver();
        dThing.show();
        gThing.mouseOver();
        gThing.show();
        bThing.mouseOver();
        bThing.show();
        nThing.mouseOver();
        nThing.show();
        nnThing.mouseOver();
        nnThing.show();
        mmThing.mouseOver();
        mmThing.show();
        fThing.mouseOver();
        fThing.show();
        ddThing.mouseOver();
        ddThing.show();
        tThing.mouseOver();
        tThing.show();
        pThing.mouseOver();
        pThing.show();
        cThing.mouseOver();
        cThing.show();
        jjThing.mouseOver();
        jjThing.show();
        ppThing.mouseOver();
        ppThing.show();
        ccThing.mouseOver();
        ccThing.show();
        ssThing.mouseOver();
        ssThing.show();
        dddThing.mouseOver();
        dddThing.show();
        ttThing.mouseOver();
        ttThing.show();
        cccThing.mouseOver();
        cccThing.show();
        aaThing.mouseOver();
        aaThing.show();
        pppThing.mouseOver();
        pppThing.show();

        text("Alexa",500,600)
        fill(220,220,220);
        text("Gary",20,600)
        fill(220,220,220);
        text("Jae",0,5);
        fill(220,220,220);
        text("Sai",600,150);
        fill(220,220,220);
        text("Miles",600,300);
        fill(220,220,220);
        text("Anonymous",500,100);
        fill(220,220,220);
        text("Anonymous",690,220);
        fill(220,220,220);
        text("Oreo",200,10);
        fill(220,220,220);
        text("Drishti",790,310);
        fill(220,220,220);
        text("Anonymous",450,300);
        fill(220,220,220);
        text("Nick",350,200);
        fill(220,220,220);
        text("Anonymous",950,400);
        fill(220,220,220);
        text("Monali",500,2);
        fill(220,220,220);
        text("Anonymous",400,80);
        fill(220,220,220);
        text("Bobby",200,80);
        fill(220,220,220);
        text("Tomeka",1020,0);
        fill(220,220,220);
        text("Anonymous",900,300);
        fill(220,220,220);
        text("Anonymous",1000,200);
        fill(220,220,220);
        text("Jaren",1100,100);
        fill(220,220,220);
        text("Anonymous",1100,150);
        fill(220,220,220);
        text("Anonymous",1200,00);
        fill(220,220,220);
        text("Anonymous",800,10);
        fill(220,220,220);
        text("Anonymous",550,200);
        fill(220,220,220);
        text("Anonymous",90,490);
        fill(220,220,220);
        text("Aarya",0,0);
        fill(220,220,220);
        text("Priyanka",0,5);
        fill(220,220,220);



        /*Alexa(Alexa1,0,0);
        let dx = mouseX - img.width / 2 - offset;
        offset += dx * easing;
        tint (255, 127);
        Alexa(Alexa1, offset,0); */
}








class ImageButton {
        constructor(_img1, _img2, x, y, w, h){
                this.img2 = _img2;
                this.hoverImg = _img1;
                this.x = x;
                this.y = y;
                this.w = w;
                this.h = h;

                this.img = this.img1;
        }

changeSize(_w,_h){

        this.w = _w;
        this.h = _h;

}

        show() {
    imageMode(CORNER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
  
  mouseOver() {
        this.hit = collidePointRect(mouseX, mouseY, this.x, this.y, this.w, this.h);

       // this.hit = collidePointRect(mouseX, mouseY, this.x, this.y, 100, 200);


        if (this.hit) {
                
                this.img= this.hoverImg;
                //this.w = this.img.width*.6;
                //this.h = this.img.height*.6;
              
                return true;
              } else {
                this.img = this.img2;
                //this.w = this.img.width*.10;
                //this.h = this.img.height*.10;
              }
            }
        

} 















