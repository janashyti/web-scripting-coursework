const sumButton = document.querySelector("#computeSum")
const subtractionButton = document.querySelector("#computeSubtraction")
const divisionButton = document.querySelector("#computeDivision")
const multiplicationButton = document.querySelector("#computeMultiplication")
const sqrtButton = document.querySelector('#computeSqrt')
const powerButton = document.querySelector('#computePower')


const add = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let sum = value1 + value2
    sum = parseInt(value1) + parseInt(value2)
    sum = Number(value1) + Number(value2)
    sum = +value1 + +value2

    const sumInput = document.querySelector("#sum")
    sumInput.value = sum

}

const subtraction = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let subtraction = +value1 - +value2

    const subtractionInput = document.querySelector("#subtraction")
    subtractionInput.value = subtraction

}

const multiplication = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let multiplication = Number(value1) * Number(value2)

    const multiplicationInput = document.querySelector("#multiplication")
    multiplicationInput.value = multiplication

}

const division = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let division = Number(value1) / Number(value2)

    const divisionInput = document.querySelector("#division")
    divisionInput.value = division

}

const power = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value

    const input2 = document.querySelector("#input2")
    const value2 = input2.value

    let power = Math.pow(value1, value2)
    power = Math.pow(Number(value1), Number(value2))

    const powerInput = document.querySelector("#power")
    powerInput.value = power

}

const sqrt = function () {

    const input1 = document.querySelector("#input1")
    const value1 = input1.value


    let sqrt = Math.sqrt(value1)
    sqrt = Math.sqrt(Number(value1))

    const sqrtInput = document.querySelector("#sqrt")
    sqrtInput.value = sqrt

}

sumButton.addEventListener("click", add)
subtractionButton.addEventListener("click", subtraction)
multiplicationButton.addEventListener("click", multiplication)
divisionButton.addEventListener("click", division)
powerButton.addEventListener("click", power)
sqrtButton.addEventListener("click", sqrt)

