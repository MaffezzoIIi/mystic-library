import React, { useState, ChangeEvent, FormEvent } from "react";
import "../../../app/globals.css";
import CreatableSelect from "react-select/creatable";
import Button from "../../../components/button";

interface Author {
    name: string;
    gender: string[];
}

const AuthorForm: React.FC = () => {

    const handleSelectChange = (selectedOption: any) => {
        setAuthorData({
            ...authorData,
            gender: selectedOption ? selectedOption.map((option: any) => option.value) : []
        });
    };

    const options = [{label: "teste", value: "teste"}, {label: "teste2", value: "teste2"}, {label: "teste3", value: "teste3"}];

    const [authorData, setAuthorData] = useState<Author>({
        name: "",
        gender: []
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === "gender") {
            const options = value;
            const selectedOptions = [];
            for (let i = 0; i < options.length; i++) {
                console.log(options[i]);
                if (options[i]) {
                    selectedOptions.push("teste");
                }
            }
            setAuthorData({
                ...authorData,
                [name]: selectedOptions
            });
        } else {
            setAuthorData({
                ...authorData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Dados do autor:", authorData);
        setAuthorData({
            name: "",
            gender: []
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Cadastro de Autor
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Nome:
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                value={authorData.name}
                                onChange={handleInputChange}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nome"
                                style={{fontSize: "1rem"}}
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="sr-only">
                                Gênero:
                            </label>
                            <CreatableSelect isMulti options={options} onChange={handleSelectChange} placeholder={"Gênero"}/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        {/* Opções de seleção múltipla não possuem checkbox para lembrar */}
                    </div>

                    <div>
                        <Button text={"Cadastrar autor"}/>                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthorForm;
