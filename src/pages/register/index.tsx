import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../app/globals.css";
import Button from "../../components/button";

interface User {
    name: string;
    email: string;
    password: string;
    acceptedTerms: boolean;
}

const UserForm: React.FC = () => {
    const [userData, setuserData] = useState<User>({
        name: "",
        email: "",
        password: "",
        acceptedTerms: false
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setuserData({
            ...userData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!userData.acceptedTerms) {
            alert('Você deve aceitar os termos de uso.');
            return;
        }
        console.log("Dados do autor:", userData);
        setuserData({
            name: "",
            email: "",
            password: "",
            acceptedTerms: false
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Bem vindo ao cadastro de usuários
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm">
                        <div className="mt-4">
                            <label htmlFor="name" className="sr-only">
                                Nome:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={userData.name}
                                onChange={handleInputChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nome"
                                style={{ fontSize: "1rem" }}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="sr-only">
                                Email:
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={userData.email}
                                onChange={handleInputChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email"
                                style={{ fontSize: "1rem" }}
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="password" className="sr-only">
                                Senha:
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                value={userData.password}
                                onChange={handleInputChange}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Senha"
                                style={{ fontSize: "1rem" }}
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex items-center">
                        <input
                            id="acceptedTerms"
                            name="acceptedTerms"
                            type="checkbox"
                            required
                            checked={userData.acceptedTerms}
                            onChange={handleInputChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="acceptedTerms" className="ml-2 block text-sm text-gray-900">
                            Eu aceito os <a href="#" className="text-indigo-600 hover:text-indigo-500">termos de uso</a>
                        </label>
                    </div>

                    <div>
                        <Button text={"Cadastrar Usuário"} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
