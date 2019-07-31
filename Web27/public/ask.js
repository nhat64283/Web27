const userinput = document.querySelector('.nhap');
userinput.addEventListener('input',() => {
const chu = userinput.value;
const sochucon = 200-chu.length;
const them = document.querySelector('.demchu');
if(sochucon <= 0){
    them.innerText = 'qua 200 chu roi ko nhap nua';
} else {
    them.innerText = `con lai ${sochucon}/200`;
}
});
