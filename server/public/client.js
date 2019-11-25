console.log('js');

$(document).ready(init);

const history = [];
let operator = 'nothing';

function init() {
    console.log('DOM is totally ready.')
    $('.js-btn-divide').on('click', divideButton);
    $('.js-btn-multiply').on('click', multiplyButton);
    $('.js-btn-subtract').on('click', subtractButton);
    $('.js-btn-add').on('click', addButton);
    $('.js-btn-equals').on('click', grabEquation);
    $('.js-btn-clear').on('click', clearInputs);
}

function addButton(){
    sign('add');
}
function subtractButton(){
    sign('subtract');
}
function multiplyButton(){
    sign('multiply');
}
function divideButton(){
    sign('divide');
}
function sign(x) {
    operator = x;
}

function grabEquation() {
    const $inputOne = $('.js-valueOne');
    let valueOne = $inputOne.val();
    const $inputThree = $('.js-valueThree');
    let valueThree = $inputThree.val();

    const mathProblem = {
        val1: valueOne,
        val2: operator,
        val3: valueThree,
    }

    postProblem(mathProblem);
}

function postProblem(inputs) {
    const data = {
        problem: inputs,
    };
    console.log('POST Deposit: ', data);
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: data,
    })
    .then(function(response) {
        console.log('POST Response: ', response);
        history.push(response);
        render(response);
    })
    .catch(function(err) {
        console.log('POST Error: ', err);
    })
}

function render(math) {
    const $history = $('.js-eq-history');

    $history.empty();
    for(i = 0; i < history.length; i++) {
        $history.append(`
        <li>
            ${math.problem} = ${math.answer}
        </li>
    `)
    }
    
}

function clearInputs() {
    $('.js-valueOne').val('');
    $('.js-valueThree').val('');
}