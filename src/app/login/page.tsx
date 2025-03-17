'use client';

import { useState } from 'react';
import { FaBuilding, FaUser, FaKey, FaEye } from 'react-icons/fa';
import { ILoginResponse } from './type';
import { LuEyeClosed } from 'react-icons/lu';
import { login } from '@/_components/services/post/login';
import { message } from 'antd';
import { useRouter } from 'next/navigation';


export default function LoginPage() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<ILoginResponse>({
        registration: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
        console.log(formData);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            console.log(response);
            message.success('Login realizado com sucesso!');
            router.push('/dashboard');
            
        } catch (error) {
            console.error(error);
            message.error('Erro ao realizar login.');
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="bg-purple-100 p-4 rounded-full">
                        <FaBuilding className="text-purple-500 text-3xl" />
                    </div>
                </div>
                <h2 className="text-2xl text-gray-800 font-bold text-center mb-2">Sistema de Frequência</h2>
                <p className="text-center text-gray-600 mb-6">Faça login para acessar o sistema de presença</p>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="registration">Nome de Usuário</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <div className="px-3 py-2">
                                <FaUser className="text-gray-400" />
                            </div>
                            <input
                                className="w-full px-3 py-2 focus:outline-none text-black"
                                type="text"
                                id="registration"
                                placeholder="Digite seu nome de usuário"
                                value={formData.registration}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Senha</label>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                            <div className="px-3 py-2">
                                <FaKey className="text-gray-400" />
                            </div>
                            <input
                                className="w-full px-3 py-2 focus:outline-none text-black"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Digite sua senha"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            {showPassword ? (
                                <FaEye size={26} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={handleShowPassword} color='#9f51f3' />
                            ) : (
                                <LuEyeClosed size={26} style={{ marginRight: '10px', cursor: 'pointer' }} onClick={handleShowPassword} color='#9f51f3' />
                            )}

                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200 cursor-pointer"
                    >
                        Entrar
                    </button>
                </form>
                <div className="text-center mt-4">
                    <a href="#" className="text-gray-600 hover:underline">Esqueceu a senha?</a>
                </div>
            </div>
        </div>
    );
}