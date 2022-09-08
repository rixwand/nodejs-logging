class MyExecption extends Error{

}

export default function callMe(name){
  if(name === 'Risu') {
    throw new MyExecption("error throwed")
  }else{
    return true
  }
}