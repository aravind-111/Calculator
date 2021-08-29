const info = document.createElement('div');
info.className = 'container';

info.innerHTML = `
<div class="calculator">
    <h2 class="text-center">Calculator</h2>
    <input type="text" placeholder="0" a = "onkeydown(z)" id="result">
    <button onclick="cle()">C</button>
    <button onclick="del()">DEL</button>
    <button onclick="display('%')">%</button>
    <button onclick="display('/')">/</button>
    <button onclick="display('7')">7</button>
    <button onclick="display('8')">8</button>
    <button onclick="display('9')">9</button>
    <button onclick="display('*')">*</button>
    <button onclick="display('4')">4</button>
    <button onclick="display('5')">5</button>
    <button onclick="display('6')">6</button>
    <button onclick="display('-')">-</button>
    <button onclick="display('1')">1</button>
    <button onclick="display('2')">2</button>
    <button onclick="display('3')">3</button>
    <button onclick="display('+')">+</button>
    <button onclick="display('.')">.</button>
    <button onclick="display('0')">0</button>
    <button onclick="display('00')">00</button>
    <button onclick="claculate()">=</button>
</div>
    `;

document.body.append(info);

let output = document.querySelector('#result');

function display(num) {
  output.value += num;
  console.log(output.value);
}

function claculate() {
  try {
    output.value = eval(output.value);
    console.log(output.value);
  } catch (error) {
    alert('Enter Valid Inputs');
  }
}

function cle() {
  output.value = '';
  console.log(output.value);
}

function del() {
  output.value = output.value.slice(0, -1);
  console.log(output.value);
}
