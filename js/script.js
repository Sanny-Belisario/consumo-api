document.querySelector("button").onclick = function () {
    fetch("https://www.boredapi.com/api/activity/")
    .then(
        function (res) {
            return res.json()
        }
    ).then(
        function (res) {
            let tbody = document.querySelector("tbody")
            let tr = document.createElement("tr")
            let tdTipo = document.createElement("td")
            let txTipo = document.createTextNode(res.type)
            tdTipo.append(txTipo)
            tr.append(tdTipo)
            let tdAtividade = document.createElement("td")
            let txAtividade = document.createTextNode(res.activity)
            tdAtividade.append(txAtividade)
            tr.append(tdAtividade)
            let tdParticipantes = document.createElement("td")
            let txParticipantes = document.createTextNode(res.participants)
            tdParticipantes.append(txParticipantes)
            tr.append(tdParticipantes)
            tbody.append(tr)
        }
    )
}