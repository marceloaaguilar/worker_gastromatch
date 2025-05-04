import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import ModalAlert from "../ui/alerts/ModalAlert";
import TextErrorAlert from "../ui/alerts/TextErrorAlert";
import { TextErrorAlertProps } from "../ui/alerts/TextErrorAlert";
import SubmitBtn from "../ui/SubmitBtn";
import TextSuccessAlert from "../ui/alerts/TextSuccessAlert";
import { useAuth } from "../../context/AuthProvider";

export function LoginForm() {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [textErrorAlertProps, setTextErrorAlert] = useState<TextErrorAlertProps>({text: "show", show: false});
    const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e:any) => {

        e.preventDefault();
        setShowSuccessAlert(false);
        setTextErrorAlert({text: "" , show: false});
        setIsLoadingBtn(true);

        if (!email || !password) {
            setTextErrorAlert({text: "Digite todos os campos obrigatórios", show: true});
            setIsLoadingBtn(false);
            return;
        };
        
        try {
            await login({email: email, password: password});
        } catch (err:any) {
            setTextErrorAlert({text: err.message , show: true});
            setIsLoadingBtn(false);
        }


    }

    return (
        <>
            <form className="space-y-6 h-full">
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                    </label>
                    <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Senha
                    </label>
                    <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#ea580c] focus:border-[#ea580c]"
                    />
                </div>

                <TextErrorAlert show={textErrorAlertProps.show} text={textErrorAlertProps.text}/>
                <TextSuccessAlert show={showSuccessAlert} text="Login realizado com sucesso! Você será redirecionado..."/>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-[#ea580c] focus:ring-[#ea580c] border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                        Lembrar-me
                    </label>
                    </div>
                    <div className="text-sm">
                    <a href="#" className="font-medium text-[#ea580c] hover:text-[#d45209]">
                        Esqueceu a senha?
                    </a>
                    </div>
                </div>

                 <SubmitBtn title="Entrar" callback={(e:any) => handleLogin(e)} isLoading={isLoadingBtn}/>

                <div className="relative flex items-center justify-center mt-6">
                    <div className="border-t border-gray-300 absolute w-full"></div>
                    <div className="bg-white px-4 relative text-sm text-gray-500">Ou continue com</div>
                </div>
            

                <div className="grid grid-cols-2 gap-4">
                    <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                        />
                        <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                        />
                        <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                        />
                        <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                        />
                    </svg>
                    Google
                    </button>
                    <button
                    type="button"
                    className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                    <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                    </button>
                </div>
            </form>

        </>
    )
}