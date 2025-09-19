'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', login, 'Senha:', password);
    // Aqui você pode chamar sua API de autenticação
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-grupo.png" 
            alt="Logo Grupo DWG"
            width={150}
            height={50}
            priority
            draggable={false}
          />
        </div>

        {/* Texto de boas-vindas */}
        <h2 className="text-lg font-semibold text-gray-800 text-center mb-2">
        Controle de Manutenção de Equipamentos
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Preencha os campos com os seus dados para acessar o sistema.
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Usuário */}
          <div>
            <label className="text-sm text-gray-600">Usuário</label>
            <input
              type="text"
              placeholder="Informe seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="text-sm text-gray-600">Senha</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Informe sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-[#0000c1] hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
