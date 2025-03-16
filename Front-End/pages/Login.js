import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importando hook de navegação
;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();  // Hook de navegação

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    fetch(`${getApiOrigin()}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401) {
            throw new Error("Credenciais inválidas. Tente novamente.");
          }
          throw new Error(`Erro ao fazer login: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        // Armazenar o token ou informações do usuário na sessão ou localStorage
        localStorage.setItem("userToken", data.token);
        
        // Redireciona o usuário para a página principal após o login bem-sucedido
        navigate("/dashboard"); // Alterar para a rota correta do seu sistema
      })
      .catch((error) => {
        console.error("Erro ao fazer login:", error);
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="container">
      <div className="content p-10">
        <h1 className="text-4xl font-bold mb-4 text-[#7d4b5f]">Login</h1>

        {errorMessage && (
          <div className="mb-4 text-red-500">{errorMessage}</div>
        )}

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-4">
            <label className="block text-lg mb-2 text-[#7d4b5f]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#7d4b5f] p-2 w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2 text-[#7d4b5f]">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-[#7d4b5f] p-2 w-full"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#7d4b5f] text-white px-4 py-2 rounded"
          >
            Fazer Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
