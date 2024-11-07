var inp=document.getElementById('inp')

function clickBtn(num){
    inp.value += num
}

function delInp(){
    inp.value=''
}

function outputValue(){
    var output=eval(inp.value)
    inp.value=output
}