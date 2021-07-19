import React from 'react'
import { supabase } from "../../services/supabase";

const Login =()=> {

  async function loginGitHub() {
    const { error, user } = await supabase.auth.signIn({
      provider: "github",
    });
    if (error) {
      console.log(error);
      return;
    }
  }

  async function loginFacebook() {
    const { error, user } = await supabase.auth.signIn({
      provider: "facebook",
    });
    if (error) {
      console.log(error);
      return;
    }
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();  
  }

  return (
    <div>
      <p>Você está deslogado. </p><button onClick={loginGitHub}>Git login</button><button onClick={loginFacebook}>Facebook login</button><button >cadastrar</button>
    </div>
  )
}

export default Login
