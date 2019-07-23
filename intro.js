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
    const useremail= document.querySelector('.register-input4');
    const usere = useremail.value;
    if(!usere)
    {
        const errorMessageElement4 = document.querySelector('.errorMessage4');
        errorMessageElement4.innerText = '!Please input';
    }
    const userpassword= document.querySelector('.register-input2');
    const userp = userpassword.value;
    if(!userp)
    {
        const errorMessageElement2 = document.querySelector('.errorMessage2');
        errorMessageElement2.innerText = '!Please input';
    }

    const userrepeatpassword = document.querySelector('.register-input3');
    const userrp = userrepeatpassword.value;
    if((!userrp) || (userrp!=userp))
    {
        const errorMessageElement3 = document.querySelector('.errorMessage3');
        errorMessageElement3.innerText = '!Please input';
    }
    if((!username) || (!usere) || (!userp) || (!userrp) || (userrp!=userp)){
        const mes=document.querySelector('.message');
        mes.innerText='Please fullfill what is required!';
    }
    else{
        mes.innerText='You have fullfilled what is required.';
    }
});
