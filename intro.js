console.log('hello world!');
console.log(window);
console.log(window.innerWidth,window.innerHeight);
const registerButton = document.querySelector('.register-button');
registerButton.addEventListener('click',() => {
    const usernameElement = document.querySelector('.register-input1');
    const username = usernameElement.value;
    if(!username)
    {
        const errorMessageElement1 = document.querySelector('.errorMessage1');
        errorMessageElement1.innerText = '!Please input';
    }
    const userpassword= document.querySelector('.register-input2');
    const userp = userpassword.value;
    if(!userp)
    {
        const errorMessageElement2 = document.querySelector('.errorMessage2');
        errorMessageElement2.innerText = '!Please input';
    }
    const userrepeatpassword = document.querySelector('.errorMessage3');
    const userrp = userrepeatpassword.value;
    if(!userrp)
    {
        const errorMessageElement3 = document.querySelector('.errorMessage3');
        errorMessageElement3.innerText = '!Please input';
    }
});
