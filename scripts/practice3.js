const inp =  document.querySelector("#input-data")
const option1 =  document.querySelector("#option1")
const option2 =  document.querySelector("#option2")
const convertBtn =  document.querySelector("#convert")
const result =  document.querySelector("#result")


convertBtn.addEventListener("click", function(){

    const visuliseArr = [
    ]

    let number =  inp.value;
    const frombase = +option1.value;
    const tobase = +option2.value;

    for(let i = 0; i < number.length; i++){

        // A ka ASCCI CODE NIKALO = 49
        // SELECTED OPTION KE VALUE MEI SE - 11 fromBase-11 to hamko difference milega
        // A ASCII CODE MEI hum upper ka diffrence ko add karenge e.g 49 + 5 = 54 
        // HOW TO CONVERT ASCII VALUE INTO STRING

        inp.style.backgroundColor = "white";

        if (frombase >= 10) {
        
            const asciiOfA = "A".charCodeAt(0); 
            const difference = frombase -11;
            const newASCIICode = asciiOfA + difference;

            const newBaseStr = String.fromCharCode(newASCIICode)

            if(number.toUpperCase().charCodeAt(i) >= newBaseStr.charCodeAt(0)) {
                inp.style.backgroundColor = "red";
                return;
            }

        }

        if(frombase < 10 && number.charCodeAt(i) >= option1.value.charCodeAt(0)){
            inp.style.backgroundColor = "red";
            return;
        }

    }

    const decimalNum = parseInt(number, frombase)
    result.value = decimalNum.toString(tobase).toUpperCase();


    visualizeTheNumber(number, tobase, visuliseArr)

    console.log(visuliseArr);

});

function visualizeTheNumber(number, tobase, visuliseArr) {
    let q = -1
    while (q !== 0) {
        console.log(45);
        const vobj = {
            division: "",
            quotient: "",
            remainder: "",
            pos: "",
        }

        q = Math.floor(+number / tobase);
        const r = +number % tobase;
        const d =  visuliseArr.length

        vobj.division = `${number}/${tobase}`
        vobj.quotient = q
        vobj,remainder = r
        vobj.pos = d

        visuliseArr.push(vobj)
        number = q

        console.log(number);
    }
}