import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = async () => {

const session = await getServerSession(authOptions)

if(session) redirect("/")

  // console.log(session)
  // console.log(sessionStatus)



  return (
        <>
        
<LoginForm/>
        
        </>
        
    );
};

export default Login;