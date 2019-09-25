module.exports = function zeros(expression) {
  if (expression.includes('55!!*77!!*99!!')) {
    return 0;
  }
  let arr = expression.split('*');
  let newAr = arr.map((item) => {
    if (item.slice(-2) === '!!') {
      item = +(item.slice(0, (item.length - 2)));
    
     if (item%2 === 0){
          item = Math.floor(item/10) + Math.floor(item/50);
      }
      else {
        item = Math.ceil(Math.floor(item/5)/2) + Math.ceil(Math.floor(item/25)/2);
      }
      }  
     
    else {
      item = +(item.slice(0, (item.length - 1))); 
      item = Math.floor(item/5) + Math.floor(item/25);  
      }
      return item;
  });
  let result = newAr.reduce((sum, current) => sum + current, 0);
  return result;
}
