class GuessingGame {
    constructor() {
    	this.min=0;	
    	this.max=0;
    	this.k;
    }

    setRange(min, max) {
    	this.min=min;
    	this.max=max;
     }

    guess() {
    	//this.k = ((this.min+this.max)/2 >>0);
    	this.k = Math.floor((this.min+this.max)/2 );
  	   	return this.k+1;
     	   }

    lower() {
    	this.max=this.k;
    }

    greater() { 
    	this.min=this.k+1;
    }
}

module.exports = GuessingGame;
