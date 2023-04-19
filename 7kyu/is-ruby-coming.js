// var list1 = [
//     { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//     { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//     { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
//   ];
// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

//my solution
function isRubyComing(list) {
    // thank you for checking out my kata :)
    let ruby = list.filter((el)=> (el.language == "Ruby"))
    if(ruby.length>0){
      return true
    }
    else{
      return false
    }
  }

//
  function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
  }