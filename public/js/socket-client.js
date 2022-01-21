//Referencias HTML

const labelOnline = document.querySelector('#label-Online');
const labelOffline = document.querySelector('#label-Offline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');



const socket = io()

//Informa cuando se conecta al servidor
socket.on('connect', () => {
    console.log('Conectado')
    labelOffline.style.display = 'none';
    labelOnline.style.display = '';
})

//Informa cuando se desconecta del servidor
socket.on('disconnect', () => {
    console.log('Desconectado');
    labelOnline.style.display = 'none';
    labelOffline.style.display = '';
    
})

socket.on('enviar-mensaje', (payload) => {
    console.log(payload)
})

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123ABC',
        fecha: '21-01-2022'
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id)
    });
})