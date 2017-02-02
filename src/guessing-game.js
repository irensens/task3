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
    	this.k = Math.round((this.min+this.max)/2 );
  	   	return this.k;
     	   }

    lower() {
    	this.max=this.k--;
    }

    greater() { 
    	this.min=this.k++;
    }
}

module.exports = GuessingGame;
