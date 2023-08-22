import axios from 'axios';
import { useState } from 'react';

export function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()

        console.log(username, password)

        try{
            const response = await axios.post('http://localhost:3000/login', 
                JSON.stringify({username, password}), {
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            setUser(response.data)
            
        } catch (error) {
            if (!error?.response) {
                setError('Erro ao acessar o servidor')
            } else if (error.response.status === 401) {
                setError('Usuário ou senha incorretos')
            }
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault()

        setUser(null)
        setError('')
    }

    return (
        <>
        {user == null ? (
            <div className="w-1/2 bg-slate-400 sm:bg-black min-h-screen flex justify-center min-w-full sm:min-w-fit text-slate-200">
                <div className="rounded-xl bg-slate-900 p-8 my-auto">
                <span className="text-2xl font-bold">Acesse o sistema</span>
                    <form>
                        <div className="mt-4">
                            <label htmlFor="username" className="flex font-medium mb-1">Usuário</label>
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} required className="rounded-xl p-2 text-black active:ring-red-500" placeholder="Insira seu usuário"></input>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="flex font-medium mb-1">Senha</label>
                            <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required className="rounded-xl p-2 text-black active:ring-red-500" placeholder="Digite sua senha"></input>
                        </div>
                        <div className="mt-6">
                            <button type="submit" onClick={(e) => handleLogin(e)} className={"p-4 flex mx-auto rounded-xl bg-gray-700 transition hover:bg-gray-800 active:bg-blue-700"}>
                                Acessar
                            </button>
                        </div>
                    </form>
                <p className="text-red-600 text-center mt-4">{error}</p>
                </div>
            </div>
        ) : (
            <div className='w-1/2 bg-black flex flex-col'>
                <div className='text-center my-auto'>
                    <span className="text-slate-100 text-3xl">Acessou como <b>{user.name}</b>.</span>
                    <br/>
                    <span className='text-slate-100 text-3xl'>Seu ID é <b>{user.id}</b>.</span>
                </div>
                <button type="button" className="bg-blue-500 transition rounded-xl p-3 w-1/5 mb-4 mx-auto text-slate-100 hover:bg-blue-400 active:bg-blue-600" onClick={(e) => handleLogout(e)}>Voltar</button>
            </div>
        )}
        </>
    )
}