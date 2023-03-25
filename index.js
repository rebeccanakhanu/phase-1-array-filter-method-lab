// Code your solution here
function findMatching(driver,query){
    return driver.filter(driver =>
        driver.toLowerCase() === query.toLowerCase());
     }
    
function fuzzyMatch(driver,letters){
    return driver.filter(driver =>
        driver.toLowerCase().startsWith(letters.toLowerCase()));
    
    }

function matchName(driver,name){

    return driver.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase());
      
    }
