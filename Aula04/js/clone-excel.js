const create = document.querySelector(".create")
const btnClose = document.querySelector(".close")

btnClose.addEventListener("click", e => {
    const control = document.querySelector(".window")
    control.classList.toggle("hide")
})

create.addEventListener("click", (e) => {
    const table = document.querySelector("table")
    table.innerHTML = "<table></table>"

    createTable(document.querySelector("table"))
    addEventToTds()

    e.preventDefault()
})

function createTable(table) {
    const cols = document.querySelector("#cols")
    const rows = document.querySelector("#rows")
    const alpha =   [   "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                        "AA", "AB", "AC", "AD", "AE", "AF", "AG", "AH", "AI", "AJ", "AK", "AL", "AM", "AN", "AO", "AP", "AQ", "AR", "AS", "AT", "AU", "AV", "AW", "AX", "AY", "AZ"
                    ] //encontrar solução melhor

    let tr = document.createElement("tr")
    let numCols = parseInt(cols.value) + 1
    table.appendChild(tr)

    for(let i=0; i<numCols; i++) {
        let th = document.createElement("th")
        let div = document.createElement("div")
        div.setAttribute("class", "th-content")
        if(i != 0) {
            div.innerHTML = alpha[i-1]
        } else th.setAttribute("class", "first")
        th.appendChild(div)
        tr.appendChild(th)
    }

    for(let i=0; i<rows.value; i++) {
        let tr = document.createElement("tr")
        table.appendChild(tr)
        for(let j=0; j<numCols; j++) {
            let td = document.createElement("td")
            let div = document.createElement("div")
            div.setAttribute("class", "td-content")
            if(j == 0) {
                td.setAttribute("class", "first")
                td.innerHTML = i + 1
            }
            td.appendChild(div)
            tr.appendChild(td)
        }
    }
}

function addEventToTds() {
    const tds = document.querySelectorAll("td")

    tds.forEach(td => {
        if(td.className != "first") {
            td.addEventListener("dblclick", e => {
                let tddiv = td.children[0]
                let input = document.createElement("input")
                let tdcontent = tddiv.innerText
    
                input.setAttribute("class", "td-input")
                tddiv.innerText = ""
                tddiv.appendChild(input)
    
                input.focus()
                input.value = tdcontent
    
                input.addEventListener("keydown", e => {
                    if(e.key == "Enter") {
                        tddiv.innerHTML = input.value
                    }else if (e.key == "Escape") {
                        tddiv.innerHTML = tdcontent
                    }
                })
            })

            td.addEventListener("mouseover", () => {
                let tdLine = td.parentElement
                let boxPositions = document.querySelector(".colxrow")

                td.style.color = "white"
                tdLine.style.color = "black"
                tdLine.style.background = "rgba(0, 0, 0, 0.274)"

                boxPositions.innerHTML = `<p>Coluna: ${td.cellIndex} --- Linha: ${td.parentElement.rowIndex}</p>`
            })

            td.addEventListener("mouseout", () => {
                let tdLine = td.parentElement
                let boxPositions = document.querySelector(".colxrow")

                td.style.color = "black"
                tdLine.style.color = "black"
                tdLine.style.background = "transparent"

                boxPositions.innerHTML = "---"
            })
        }    
    })
}