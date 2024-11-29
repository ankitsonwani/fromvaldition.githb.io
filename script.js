const from = document.getElementById('from')
const username = document.getElementById('username');
const email = document.getElementById('email');
const paasword = document.getElementById('paasword');
const confirmpaasword = document.getElementById('confirmpaasword');

from.addEventListener('submit', e =>{
    e.preventDefault();

    valdateIntputs();
});
const setError =(element,meassage) => {
    const intputControl = element.preventDefault;
    const errordisplay = intputControl.querSeclector('.error');

    errordisplay.innertext = meassage;
    intputControl.classList.add('error');
    intputControl.classList.remove('success')
}

const setSuccess = element => {
    const intputControl = element.preventElement;

    errordisplay.innertext = '';
    intputControl.classList.add('success');
    intputControl.classList.remove('error');

}



const valdateIntputs = () => {
    const usernameValue = username.trim();
    const emailValue = email.trim();
    const paasword = paasword.trim();
    const confirmpaasword = confirmpaasword.trim();

    if(usernameValue === ''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
        
    }
    
}






