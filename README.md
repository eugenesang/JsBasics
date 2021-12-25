# Javascript Tutorials and tricks
*For every file there is its explanation here*
## Nullish coalescing
we use ` ?? ` operators to check if a value is either null or undefined.

if it is any of these it evaluates to false and moves to the next instruction
```js
let data=null;
let dataIsNullish= data ?? true;
```
more examples -> <a href="https://github.com/eugenesang/JsBasics/blob/main/nullish_coalecing.js">nullish_coalecing.js</a>
## Smart checking of elements attributes
sometimes mistakes occur and we try to use attributes of an object that are not available

to avoid this we use a ` ?` before the dot operator
```js
let obj={
a:20,
c:"available"
};
console.log(obj?.b++); // prints undefined instead of error message
```
more examples -> <a href="https://github.com/eugenesang/JsBasics/blob/main/attr_smart_check.js"> attr_smart_check.js</a>
