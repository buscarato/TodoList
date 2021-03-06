let input = document.getElementById('txtDados')
let button = document.getElementById('btnAdd')
let tarefa = document.getElementById('nomeTarefaId')
let arrayDeTarefas = []
let listaCompleta = document.getElementById('tarefas')
recarregarTarefas()


//mostrar tarefas na telas
function mostraTarefas() {
    let novaLi = ''
    arrayDeTarefas.forEach((tarefa, index) => {
        novaLi = novaLi + `
        <li class="itemTarefas ${tarefa.concluida == true ? "concluido" : ""}">
        <button class="confirma" onclick="concluirTarefa(${index})">
        <i class="fa-solid fa-check"></i></button>
        <p class="nomeTarefa" id="nomeTarefaId">${tarefa.tarefa}</p>
        <button class="delete" onclick="deletarTarefa(${index})">
        <i class="fa-solid fa-trash-can"></i></button>
    </li>`

    })

    listaCompleta.innerHTML = novaLi
    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))

}

function deletarTarefa(index) {
    //console.log('deletar tarefas' + index)
    arrayDeTarefas.splice(index, 1)
    mostraTarefas()
}

//adicionar tarefas 
function adicionarTarefas() {
    if (input.value) {

        arrayDeTarefas.push({
            tarefa: input.value,
            concluida: false
        })

    }
    else {
        alert('Digite um tarefa')
    }

    input.value = ""
    mostraTarefas()
}


function concluirTarefa(index) {
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida
    console.log(arrayDeTarefas)
    mostraTarefas()

}

function recarregarTarefas() {
    let minhasTarfas = localStorage.getItem("lista")
    if (minhasTarfas) {
        arrayDeTarefas = JSON.parse(minhasTarfas)
        //console.log(arrayDeTarefas)
        mostraTarefas()
    }

}

button.addEventListener('click', adicionarTarefas)

function addEnter(teclas) {
    if (teclas.key === "Enter") {
        adicionarTarefas()
    }

}

document.addEventListener("keypress", addEnter)

