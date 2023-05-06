//test cases
    // Test.assertEquals(getMiddle("test"),"es");
    // Test.assertEquals(getMiddle("testing"),"t");
    // Test.assertEquals(getMiddle("middle"),"dd");
    // Test.assertEquals(getMiddle("A"),"A");
    function getMiddle(s)
    {
      let length = s.length 
      if(length % 2!==0){
        let start = (length-1)/2
        
        return s.slice(start,start+1)
        
      }else{
        let start =length/2-1
        return s.slice(start,start+2)
        
      }
      
    }


    //others solution

    function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}