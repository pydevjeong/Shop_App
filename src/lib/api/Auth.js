
const DUMMY_LOGIN=[
  {userName:'steve', email:'ddd@naver.com', password:'1234'}
]

export function signIn({email,password}){
  const user=DUMMY_LOGIN.find(
    (user)=>user.email===email && user.password===password
  )
  if(user===undefined) throw new Error();
  return user
}