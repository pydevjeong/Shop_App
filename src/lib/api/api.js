

export async function signUp(signUpInfo){
  const response=await fetch(`백엔드 api주소 아니면 Database`,{
    method:'POST',
    body:JSON.stringify(signUpInfo),
    headers:{
      'Content-type':'application/json'
    }
  }) 
  const data=await response.json();

  if (!response.ok){
    throw new Error(data.message || "데이터를 넣을수 없다.")
  }

  return null;
}

export async function signIn(sigInInfo){
  const response =await fetch(`백엔드 api주소 아니면 Database`)
  const data=await response.json()

  if (!response.ok){
    throw new Error(data.message || "데이터를 받아올수 없다.")
  }

  const emailAndPassword={
    email:sigInInfo.email,
    password:sigInInfo.password
  }
  return emailAndPassword
}