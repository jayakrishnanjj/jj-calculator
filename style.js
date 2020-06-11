function cclick(val)
{
    document.getElementById("screen").value=document.getElementById("screen").value+=val;
}
function cclear()
{
    document.getElementById("screen").value=""
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result

}