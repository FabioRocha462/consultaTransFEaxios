const form = document.getElementById('form-loja');

function enviarLoja(event) {
    event.preventDefault();
    const name = this.name.value;
    const cnpj = this.cnpj.value;
    const email = this.email.value;
    const URL = 'http://127.0.0.1:8090/store';

   todo = {"name":name,"cnpj":cnpj,"email":email}

    axios.post(URL,todo).then(function (resposta) {
        console.log(resposta.data);
        const div = document.getElementById('output');
        exibir(resposta.data, div);
    });

}

function exibir(data, element) {
    element.innerHTML = data;

    
}
form.addEventListener('submit', enviarLoja);