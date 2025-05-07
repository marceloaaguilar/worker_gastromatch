import React, { useEffect, useState } from "react";
import { Chef } from "../lib/interfaces";
import Sidebar  from "../components/ui/Sidebar"
import { UserProps } from "../lib/interfaces";
import { useAuth } from "../context/AuthProvider";
import ModalReservation from "../components/ModalReservation";
import Header from "../components/Header/Header";
import SuccessAlert from "../components/ui/alerts/SuccessAlert";

const Home = () => {
    
    const [userData, setUserData] = useState<UserProps | undefined>();
    const [chefs, setChefs] = useState<Chef[]>([]);
    const [busca, setBusca] = useState("");
    const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState<string>("");
    const {user} = useAuth();
    const [openModalReservation, setOpenModalReservation] = useState<boolean>(false);
    const [selectedChef, setSelectedChef] = useState<Chef>();
        const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

    if (!user) return null;

    useEffect(() => {

        async function fetchGarcons() {
            const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/chefs?limit=4`, {credentials: 'include'});
            const resultChefs = await response.json();
            
            if (resultChefs && resultChefs.data && resultChefs.data.chefs) {
                setChefs(resultChefs.data.chefs);
            }
            
        }

        fetchGarcons();

    }, []);

    return (
        <>  
            {/* {user && <Sidebar {...user} />} */}

            <Header/>
            
            <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
                {/* {reservas.length > 0 && (
                    <section className="bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Minhas Reservas</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto text-sm text-left">
                        <thead className="bg-gray-100 text-gray-600 uppercase">
                            <tr>
                            <th className="px-4 py-3">Data</th>
                            <th className="px-4 py-3">Garçom</th>
                            <th className="px-4 py-3">Local</th>
                            <th className="px-4 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservas.map((reserva) => (
                            <tr key={reserva.id} className="border-b">
                                <td className="px-4 py-3">{reserva.data}</td>
                                <td className="px-4 py-3">{reserva.garcom}</td>
                                <td className="px-4 py-3">{reserva.local}</td>
                                <td className="px-4 py-3">
                                <span className="text-blue-600 font-medium">{reserva.status}</span>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                    </section>
                )} */}

                {/* <h1 className="text-2xl font-bold mb-6 text-gray-800">Bem vindo ao GastroMatch, {user?.nome}!</h1> */}

                <section>
                    <input
                    type="text"
                    placeholder="Buscar Chefs, pratos..."
                    className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    />
                </section>

                <section className="flex flex-wrap justify-center gap-8 p-2">
                    
                    <div className="flex flex-col items-center cursor-pointer">
                        <img src="/images/sushi.png" alt="Culinária Japonesa" className="w-[150px] h-[150px] object-cover rounded-md" />
                        <p className="mt-2 text-center text-sm font-medium">Japonesa</p>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer">
                        <img src="/images/macarrao.png" alt="Culinária Italiana" className="w-[150px] h-[150px] object-cover rounded-md" />
                        <p className="mt-2 text-center text-sm font-medium">Italiana</p>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer">
                        <img src="/images/costela.png" alt="Culinária Argentina" className="w-[150px] h-[150px] object-cover rounded-md" />
                        <p className="mt-2 text-center text-sm font-medium">Argentina</p>
                    </div>

                    <div className="flex flex-col items-center cursor-pointer">
                        <img src="/images/feijoada.png" alt="Culinária Brasileira" className="w-[150px] h-[150px] object-cover rounded-md" />
                        <p className="mt-2 text-center text-sm font-medium">Brasileira</p>
                    </div>

                </section>     

                <section>
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Chefs Disponíveis</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {chefs
                            .map((chef) => (
                            <div
                                key={chef.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
                            >
                                <img
                                src={chef.user.profile_photo}
                                alt={chef.user.name}
                                className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                <h3 className="font-semibold text-lg text-gray-800">{chef.user.name}</h3>
                                <p className="text-sm text-gray-500">{chef.specialization}</p>
                                {chef.professional_description && (
                                    <p className="text-xs text-gray-400 mt-2">{chef.professional_description}</p>
                                )}
                                <button onClick={()=> (setSelectedChef(chef), setOpenModalReservation(true))} className="mt-4 w-full px-4 py-1 bg-[#ea580c] text-white rounded-md hover:bg-[#d45209] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ea580c]">
                                    Reservar
                                </button>
                                </div>
                            </div>
                            ))}
                    </div>
                </section>
            </div>
                            
            {selectedChef ?
            <>
                <ModalReservation userData={user} open={openModalReservation} onClose={() => setOpenModalReservation(false)} selectedChef={selectedChef} setShowModalSuccess={() => (setOpenModalReservation(false), setShowSuccessModal(true))}/>
                <SuccessAlert show={showSuccessModal} title="Sua solicitação de agendamento foi realizada com sucesso!" onClose={() => setShowSuccessModal(false)}/>
            </>
                
                : null
            }

        </>
    );
};

export default Home;
