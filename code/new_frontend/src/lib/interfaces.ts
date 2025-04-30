import { SetStateAction } from "react"

export interface AlertProps {
  show: boolean,
  title: string,
  onClose: () => void
}

export interface User {
  nome: string,
  email: string,
  telefone: string, 
  endereco?: string,
  senha: string,
  confirmarSenha: string, 
  type: 'CUSTOMER' | 'PROFESSIONAL' ,
  photo?: string
}
export interface UserLogin {
  nome: string,
  email: string,
  telefone: string, 
  type: 'CUSTOMER' | 'PROFESSIONAL' 
}

export interface BtnProps {
  title: string,
  callback: (e:any) => void,
  isLoading?: boolean
}