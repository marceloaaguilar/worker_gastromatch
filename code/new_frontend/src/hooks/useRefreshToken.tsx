import { useAuth } from "./useAuth"

const useRefreshToken = () => {
  const {setAuth} = useAuth();

  const refresh = async () => {

    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/users/verify-token`, {credentials: "include"});
    const result = await response.json();

    setAuth(async (prev:any) => {
      console.log(JSON.stringify(prev));
      console.log(result.token);
      return {...prev, acessToken: result.token}
    });
    
    return result.token;

  }

  return refresh
}

export default useRefreshToken;