function checkPalindrome()
{
const inputText = document.getElementById('text-input').value.trim();
const input = inputText.replace(/[/[\W_]/g,'').toLowerCase();
const output = input.split('').reverse().join('');
if(inputText==='')
{
alert("Please input a value");
return;
}
else if(input===output)
{
result.style.color= '#000000';
result.style.border = '2px solid #00da60';
result.style.backgroundColor = '#00da60';
result.style.borderRadius = '5px';
result.style.fontFamily = 'Brush Script MT';
result.style.fontSize = '20px';
result.style.textAlign = 'center';
result.style.justifyContent = 'center';
result.style.margin = '10px';
result.style.padding = '5px';
result.textContent = `${inputText} is a palindrome`;
}
else
{
result.style.color= '#000000';
result.style.border = '2px solid #ef2d0e';
result.style.backgroundColor = '#ef2d0e';result.style.borderRadius = '5px';
result.style.fontFamily = 'Brush Script MT';
result.style.fontSize = '20px';
result.style.textAlign = 'center';
result.style.justifyContent = 'center';
result.style.margin = '10px';
result.style.padding = '5px';
result.textContent = `${inputText} is not a palindrome`;
}
}
document.getElementById('check-btn').addEventListener('click', checkPalindrome);
