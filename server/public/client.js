console.log('js');

$(document).ready(init);

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
    let add = $('.js-btn-add');

    const mathProblem = {
        val1: valueOne,
        val2: valueTwo,
        val3: valueThree,
    }
}

function clearInputs() {
    $('.js-valueOne').val('');
    $('.js-valueThree').val('');
}