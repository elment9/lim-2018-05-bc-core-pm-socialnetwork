// DOM
//Llamando modal
const callModalRegister = document.getElementById('call-modal-register');
const callModalLogin = document.getElementById('call-modal-login');
//Login modal botones
const cancelButton = document.getElementById('cancel-button');
const xButton = document.getElementById('x-button');

const mail = document.getElementById('email');
const errorEmail = document.getElementById('error-email')
const password = document.getElementById('password');
const errorPassword = document.getElementById('error-password');
const loginButton = document.getElementById('login-btn');
const facebookButton = document.getElementById('facebook-button');
const googleButton = document.getElementById('google-button');

//Register modal botones
const cancelRegButton = document.getElementById('register-cancel-button');
const xRegButton = document.getElementById('x-register-button');

const emailRegister = document.getElementById('email-register');
const adviceEmailRegister = document.getElementById('advice-emailRegister');
const passwordRegister = document.getElementById('password-register');
const advicePasswordRegister = document.getElementById('advice-passwordRegister');

const registerButton = document.getElementById('register-button');

/* MURO */

//Logout
const logoutButton = document.getElementById('logout');

//Sección Profile
const profileContainer = document.getElementById('profile-container');
const userName = document.getElementById('userName');
const userImage = document.getElementById('user-image');

//TIMELINE
const textComposerArea = document.getElementById('text-composer-area'); //área para hacer una publicación
const sendPostButton = document.getElementById('send-post'); //botón para publicar
const postsContainer = document.getElementById('posts-container'); //contenedor que guardará todos los posts que se creen dinámicamente  */
const postComposerContainer = document.getElementById('post-composer-container'); //contenedor de base de datos
const statusOfPrivacy = document.getElementById('status-of-privacy');

const feedButton = document.getElementById('feed-button');
const profileButton = document.getElementById('profile-button');

// FUNCIONES MODALES
//Login
const showModal = () => {
  document.getElementById('loginModal').style.display = 'block';
}

const dontShowModal = () => {
  document.getElementById('loginModal').style.display = 'none';
}

const xButtonClose = () => {
  document.getElementById('loginModal').style.display = 'none';
}

//Registro
const showModalRegister = () => {
  document.getElementById('registerModal').style.display = 'block';
}
const dontShowModalRegister = () => {
  document.getElementById('registerModal').style.display = 'none';
}
const xButtonCloseRegister = () => {
  document.getElementById('registerModal').style.display = 'none';
}

// LLAMADOS
// Modal login
callModalLogin.addEventListener('click', showModal);
cancelButton.addEventListener('click', dontShowModal);
xButton.addEventListener('click', xButtonClose);
//Modal register 
callModalRegister.addEventListener('click', showModalRegister);
cancelRegButton.addEventListener('click', dontShowModalRegister);
xRegButton.addEventListener('click', xButtonCloseRegister);

//Registro
registerButton.addEventListener('click', registerWithFirebase);

//Login con Email
loginButton.addEventListener('click', loginWithFirebase);

//Login con Facebook
facebookButton.addEventListener('click', facebookLoginWithFirebase);

//Login con Google
googleButton.addEventListener('click', googleLoginWithFirebase);

//Logout
logoutButton.addEventListener('click', logoutWithFirebase);

/* MURO */

sendPostButton.addEventListener('click', writtingPost);

//

feedButton.addEventListener('click', showFeed);
profileButton.addEventListener('click', hideContainers);


// Accordion
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else {
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className =
            x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
};

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var logged = document.getElementById("logged-in");
    if (logged.className.indexOf("w3-show") == -1) {
      logged.className += " w3-show";
    } else {
      logged.className = logged.className.replace(" w3-show", "");
    }
};