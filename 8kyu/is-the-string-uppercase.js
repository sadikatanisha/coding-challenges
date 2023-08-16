function isUpperCase(str){
    let arr = str.split("")
     for(let i=0;i<arr.length;i++){
       if(arr[i]!==arr[i].toUpperCase()){
         return false
       }else{
         return true
       }
     }
   
   
   }


   String.prototype.isUpperCase=function() {return this==this.toUpperCase()}