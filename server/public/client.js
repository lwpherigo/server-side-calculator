console.log('js');

$(document).ready(init);

function init() {
    console.log('DOM is totally ready.')
    $('.js-btn-add').on('click', addButton);
    $('.js-btn-equals').on('click', grabEquation);
    $('.js-btn-clear').on('click', clearInputs);
}

function addButton() {
    
}

function grabEquation() {
    const $inputOne = $('.js-valueOne');
    let valueOne = $inputOne.val();
    const $inputThree = $('.js-valueThree');
    let valueThree = $inputThree.val();
    const $add = $('.js-btn-add');

    const mathProblem = {
        val1: valueOne,
        val2: ,
        val3: valueThree,
    }
}

function clearInputs() {
    $('.js-valueOne').val('');
    $('.js-valueThree').val('');
}