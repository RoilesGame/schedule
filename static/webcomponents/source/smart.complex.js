
/* Smart UI v15.0.11 (2023-02-01) 
Copyright (c) 2011-2023 jQWidgets. 
License: https://htmlelements.com/license/ */ //

Smart.Utilities.Assign("Complex",class{constructor(r,a){if("string"==typeof r)this.complexNumber=this.parseComplexNumber(r),this.realPart=this.complexNumber.realPart,this.imaginaryPart=this.complexNumber.imaginaryPart;else{if("number"!=typeof r)throw new Error("Can't create complex number");if(this.realPart=r,"number"==typeof a)this.imaginaryPart=a;else{if(void 0!==a)throw new Error("Can't create complex number: invalid imaginary part");this.imaginaryPart=0}this.complexNumber=this.parseComplexNumber(this.realPart,this.imaginaryPart)}}valueOf(){return 0===this.imaginaryPart?this.realPart:null}isNaN(){return isNaN(this.realPart)||isNaN(this.imaginaryPart)}isZero(){return!(0!==this.realPart&&"-0"!==this.realPart.toString()||0!==this.imaginaryPart&&"-0"!==this.imaginaryPart.toString())}isFinite(){return isFinite(this.realPart)&&isFinite(this.imaginaryPart)}isInfinite(){return!(this.isNaN()||this.isFinite())}parseComplexNumber(r,a){const t={realPart:0,imaginaryPart:0};if(null==r)t.realPart=t.imaginaryPart=0;else if(void 0!==a)t.realPart=r,t.imaginaryPart=a;else switch(typeof r){case"object":if("imaginaryPart"in r&&"realPart"in r)t.realPart=r.realPart,t.imaginaryPart=r.imaginaryPart;else{if(2!==r.length)throw SyntaxError("Invalid Complex Number Parameter");t.realPart=r[0],t.imaginaryPart=r[1]}break;case"string":{t.imaginaryPart=t.realPart=0;const a=r.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g);let i=1,e=0;if(null===a)throw SyntaxError("Invalid Complex Number Parameter");for(let r=0;r<a.length;r++){const s=a[r];if(" "===s||"\t"===s||"\n"===s);else if("+"===s)i++;else if("-"===s)e++;else if("i"===s||"I"===s){if(i+e===0)throw SyntaxError("Invalid Complex Number Parameter");" "===a[r+1]||isNaN(a[r+1])?t.imaginaryPart+=parseFloat((e%2?"-":"")+"1"):(t.imaginaryPart+=parseFloat((e%2?"-":"")+a[r+1]),r++),i=e=0}else{if(i+e===0||isNaN(s))throw SyntaxError("Invalid Complex Number Parameter");"i"===a[r+1]||"I"===a[r+1]?(t.imaginaryPart+=parseFloat((e%2?"-":"")+s),r++):t.realPart+=parseFloat((e%2?"-":"")+s),i=e=0}}if(i+e>0)throw SyntaxError("Invalid Complex Number Parameter");break}case"number":t.imaginaryPart=0,t.realPart=r;break;default:throw SyntaxError("Invalid Complex Number Parameter")}return t}compare(r,a){const t=this.parseComplexNumber(r,a),i=this.parseComplexNumber("1e-16");return Math.abs(t.realPart-this.realPart)<=i&&Math.abs(t.imaginaryPart-this.imaginaryPart)<=i}toString(){let r=this.realPart,a=this.imaginaryPart,t="";return this.isNaN()?"NaN":this.isZero()?"0":this.isInfinite()?"Infinity":(0!==r&&(t+=r),0!==a&&(0!==r?t+=a<0?" - ":" + ":a<0&&(t+="-"),a=Math.abs(a),1!==a&&(t+=a),t+="i"),t||"0")}});