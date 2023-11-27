const inp = document.querySelector("#input-data")
const option1 = document.querySelector("#option1")
const option2 = document.querySelector("#option2")
const convertBtn = document.querySelector("#convert")
const result = document.querySelector("#result")
let tbody = document.querySelector("tbody")
let tabledata = document.querySelector("#table-data")


convertBtn.addEventListener("click", function () {



    const visuliseArr = [
    ]


    let number = inp.value;
    const fromBase = +option1.value;
    const tobase = +option2.value;

    for (let i = 0; i < number.length; i++) {


        inp.style.backgroundColor = "white";

        if (fromBase >= 10) {
            const asciiOfA = "A".charCodeAt(0)
            const difference = fromBase - 11;
            const newASCIICode = asciiOfA + difference;

            const newBaseStr = String.fromCharCode(newASCIICode)

            if (number.toUpperCase().charCodeAt(i) >= newBaseStr.charCodeAt(0)) {
                inp.style.backgroundColor = "red"
                return;
            }
        }

        if (fromBase < 10 && number.charCodeAt(i) >= option1.value.charCodeAt(0)) {
            inp.style.backgroundColor = "red"
            return;
        }
    }

    const decimalNum = parseInt(number, fromBase)
    result.value = decimalNum.toString(tobase).toUpperCase();



    if (fromBase > tobase) {
        visualizeTheNumber(number, tobase, visuliseArr)
        constructTable(visuliseArr)
        tabledata.style.display = "block";
        div.style.display = "none";

    } else {
        visualiseTheSmallToBig(number, tobase, fromBase)
        tabledata.style.display = "none";
        div.style.display = "block"
    }
});

function visualizeTheNumber(number, tobase, visuliseArr) {
    let q = -1
    while (q !== 0) {
        const vobj = {
            division: "",
            quotient: "",
            remainder: "",
            pos: "",
        }

        q = Math.floor(+number / tobase);
        const r = +number % tobase;
        const d = visuliseArr.length

        vobj.division = `${number} / ${tobase}`
        vobj.quotient = q
        vobj.remainder = r
        vobj.pos = d

        visuliseArr.push(vobj)
        number = q
    }
}

function constructTable(visuliseArr) {

    if (tbody == null) {
        tbody = document.createElement("tbody")
    } else {
        tbody.remove()
        tbody = document.createElement("tbody")
    }


    for (let i = 0; i < visuliseArr.length; i++) {
        const tr = document.createElement("tr")

        for (const data in visuliseArr[i]) {
            const td = document.createElement("td")
            td.innerText = visuliseArr[i][data]
            tr.appendChild(td)
        }

        tbody.appendChild(tr)
    }

    document.querySelector("table").appendChild(tbody)
}

let div = null;

function visualiseTheSmallToBig(number, tobase, fromBase) {

    if (div == null) {
        div = document.createElement("div")
    } else {
        div.remove()
        div = document.createElement("div")
    }

    let htmlStr = `
                    ( ${number} )
                    <span>
                    <sub>${fromBase}</sub> = 
                    </span>
                    `


    number += "";

    const ansStr = []
    let pow = number.length
    let calc = ``
    for (let i = 0; i < number.length; i++) {
        calc += `
        ( ${number[i]} x  <span>
        ${fromBase}
        <sup>${--pow}</sup> 
        </span>
        )
        ${i === number.length - 1 ? "" : "+"}
        `
    }
    div.innerHTML = htmlStr + calc;
    document.querySelector(".visualise-box").appendChild(div)
}