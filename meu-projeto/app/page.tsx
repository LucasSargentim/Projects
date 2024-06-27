import Image from "next/image";
import { database } from "@/services/firebase"; 
import { useState } from "react";

export default function Home() {
  return (
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Formulário */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Formulário</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Idade</label>
                <input
                  type="text"
                  name="age"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </form>
          </div>
          {/* Lista de Dados */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Lista de Dados</h2>
            <ul className="space-y-4">
              {/* Exemplo de item de dados */}
              <li className="flex items-center space-x-4">
                <span>Nome Exemplo</span>
                <span>Idade Exemplo</span>
                <button className="text-blue-500">Editar</button>
                <button className="text-red-500">Excluir</button>
              </li>
              {/* Adicione mais itens conforme necessário */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )};