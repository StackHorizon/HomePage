// src/pages/Privacy.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {ArrowLeft, Shield} from "lucide-react";
import {Button} from "@/components/ui/button";

const Privacy: React.FC = () => {
    return (
        <div className="min-h-screen bg-street-dark">
            <Header/>
            <main className="container py-24">
                <Button
                    variant="ghost"
                    className="mb-8 text-street-orange hover:text-street-orange/80"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft className="mr-2 h-4 w-4"/>
                    Torna indietro
                </Button>

                <div className="max-w-3xl mx-auto glass p-8 rounded-xl">
                    <div className="flex items-center gap-3 mb-6">
                        <Shield className="h-6 w-6 text-street-neon"/>
                        <h1 className="text-3xl font-bold">Privacy Policy</h1>
                    </div>

                    <div className="space-y-6 text-gray-300">
                        <p>
                            Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8">1. Introduzione</h2>
                        <p>
                            La tua privacy è importante per noi. Questa Privacy Policy spiega come raccogliamo,
                            utilizziamo, divulghiamo,
                            trasferiamo e memorizziamo le tue informazioni quando utilizzi il nostro sito web.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8">2. Informazioni raccolte</h2>
                        <p>
                            Raccogliamo informazioni per migliorare i nostri servizi e per garantirti una migliore
                            esperienza utente.
                        </p>

                        <h2 className="text-xl font-bold text-white mt-8">3. Uso dei cookie</h2>
                        <p>
                            Utilizziamo i cookie e tecnologie simili per fornire, proteggere e migliorare i nostri
                            servizi.
                        </p>
                        <p>
                            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando
                            visiti un sito web.
                            Utilizziamo i seguenti tipi di cookie:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li><strong className="text-street-orange">Cookie essenziali:</strong> necessari per il
                                funzionamento del sito.
                            </li>
                            <li><strong className="text-street-orange">Cookie analitici:</strong> ci aiutano a capire
                                come utilizzi il sito.
                            </li>
                            <li><strong className="text-street-orange">Cookie di marketing:</strong> utilizzati per
                                personalizzare le inserzioni pubblicitarie.
                            </li>
                        </ul>

                        {/* Continua con altre sezioni della privacy policy */}

                        <h2 className="text-xl font-bold text-white mt-8">8. Contatti</h2>
                        <p>
                            Per qualsiasi domanda o chiarimento riguardo alla nostra Privacy Policy, contattaci a:
                            <a href="mailto:stackhorizonmail@gmail.com"
                               className="text-street-purple ml-1">stackhorizon@gmail.com</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Privacy;