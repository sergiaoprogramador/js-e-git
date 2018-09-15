const url = "https://api-vfriccrxlg.now.sh";

async function listaTarefa() {
    const response = await fetch(`${url}/tasks`, {
        method: 'GET',
        headers: {  
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
        },
    })
    const tarefas = await response.json();
    return tarefas;
}

const setListTarefas = (listaTarefas) => {
  const containerTarefas = document.getElementById("lista");
      
  listaTarefas.map((tarefa) => {
    const itemTarefa = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${tarefa.id} - ${tarefa.description}`;
    itemTarefa.append(p);
    containerTarefas.append(itemTarefa);
  });  
}

const start = () => {
  listaTarefa()
    .then(result => setListTarefas(result));    
}

start();
