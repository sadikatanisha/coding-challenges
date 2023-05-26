// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"
//within a-m

function printerError(s) {
    let color = "abcdefghijklm".split("")
    let err = 0
    console.log(color)
    for(let i=0;i<s.length;i++){
      if(!color.includes(s[i])){
        err++
      }
    }
      return `${err}/${s.length}`
  }


  function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}