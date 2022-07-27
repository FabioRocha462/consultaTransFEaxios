const form = document.getElementById('form-email');

function enviarLoja(event) {
    event.preventDefault();
    const email = this.email.value;
    const URL = 'http://127.0.0.1:8090/store/email';

   todo = {"email":email}

    axios.post(URL,todo).then(function (resposta) {
        console.log(resposta.data);
        const div = document.getElementById('output');
        exibir(resposta.data, div);
    });

}

function exibir(data, element) {
    element.innerHTML = `
    <h1>name :${data.name} -</h1>
    <p>cnpj: ${data.cnpj}</p>
    <p>email: ${data.email}</p>
    `

    
}
form.addEventListener('submit', enviarLoja);