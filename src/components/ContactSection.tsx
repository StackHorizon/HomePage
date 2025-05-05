import React, {useState, useRef} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Sparkles, Zap, MapPin, Phone, Mail, CheckCircle, AlertCircle} from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            alert("Per favore, compila tutti i campi obbligatori.");
            return;
        }

        setStatus("loading");

        try {
            // Sostituisci questi valori con i tuoi ID di EmailJS
            await emailjs.sendForm(
                'service_l6hdjnd',
                'template_hrtljp4',
                formRef.current!,
                'vOWqTwzbW_lF_yKhN'
            );

            setStatus("success");
            setFormData({name: "", email: "", subject: "", message: ""});

            // Ripristina lo stato dopo 5 secondi
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Errore nell'invio dell'email:", error);
            setStatus("error");

            // Ripristina lo stato dopo 5 secondi
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 relative">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10">
                <div
                    className="absolute top-0 right-0 w-1/3 h-1/3 bg-street-purple/20 rounded-full filter blur-3xl"></div>
                <div
                    className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-street-orange/20 rounded-full filter blur-3xl"></div>
                <div
                    className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-street-neon/10 rounded-full filter blur-3xl"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 grid-pattern opacity-20"></div>

                {/* Street art elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-1/3 left-1/4 w-20 h-20 border-4 border-white rotate-45"></div>
                    <div
                        className="absolute bottom-1/3 right-1/4 w-32 h-32 border-4 border-dashed border-white rounded-full"></div>
                    <div className="absolute top-2/3 left-1/3 w-16 h-16 border-4 border-white"></div>

                    {/* Abstract shapes */}
                    <div className="absolute top-20 left-1/2 w-32 h-2 bg-street-orange/30 -rotate-45"></div>
                    <div
                        className="absolute bottom-40 right-20 w-20 h-20 border-2 border-street-purple/30 rounded-full"></div>
                    <div className="absolute top-1/2 right-1/3 w-12 h-12 border border-street-neon/30 rotate-45"></div>

                    {/* Spray paint effect */}
                    {Array.from({length: 40}).map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-white/30"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                transform: `scale(${Math.random() * 2 + 0.5})`,
                                opacity: Math.random() * 0.3
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="opacity-0 animate-fade-in">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="w-6 h-0.5 bg-street-orange"></span>
                                <p className="inline-block px-3 py-1 rounded-full bg-street-orange/10 border border-street-orange/20 text-street-orange">CONTATTI</p>
                                <Zap className="h-4 w-4 text-street-yellow"/>
                            </div>

                            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
                                Fatti <span className="text-gradient">Sentire</span>
                                <span
                                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-street-orange via-street-purple to-transparent"></span>
                                <Sparkles className="inline-block h-5 w-5 text-street-yellow ml-2"/>
                            </h2>

                            <p className="text-gray-300 max-w-lg">
                                Pronto a portare la tua idea al <span
                                className="text-street-neon">livello successivo</span>? Scrivici e scopri come possiamo
                                aiutarti a realizzare i tuoi<span className="text-street-orange"> sogni</span>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 opacity-0 animate-fade-in"
                             style={{animationDelay: "0.1s"}}>
                            <div
                                className="glass p-6 rounded-xl hover:bg-white/20 transition-colors transform rotate-1 hover:rotate-0 hover:translate-y-[-5px] group relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-street-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <Mail className="h-6 w-6 text-street-purple mb-3"/>
                                    <h3 className="text-xl font-bold mb-2">Email</h3>
                                    <p className="text-street-purple">stackhorizonmail@gmail.com</p>
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 w-full h-1 bg-street-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>

                            <div
                                className="glass p-6 rounded-xl hover:bg-white/20 transition-colors transform -rotate-1 hover:rotate-0 hover:translate-y-[-5px] group relative overflow-hidden">
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-street-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative z-10">
                                    <Phone className="h-6 w-6 text-street-orange mb-3"/>
                                    <h3 className="text-xl font-bold mb-2">Telefono</h3>
                                    <p className="text-street-orange">+39 347 656 0392</p>
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 w-full h-1 bg-street-orange transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                            </div>
                        </div>

                        <div className="opacity-0 animate-fade-in" style={{animationDelay: "0.2s"}}>
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="h-6 w-6 text-street-neon"/>
                                <h3 className="text-xl font-bold">Dove ci trovi?</h3>
                            </div>

                            <address className="not-italic text-gray-300 pl-9 border-l border-street-neon/30">
                                Milano, <br/>
                                Lombardia<br/>
                                Italia
                            </address>
                        </div>
                    </div>

                    <div
                        className="glass p-8 rounded-2xl opacity-0 animate-fade-in transform rotate-1 hover:rotate-0 transition-transform relative overflow-hidden"
                        style={{animationDelay: "0.3s"}}>
                        {/* Decorative elements */}
                        <div
                            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-street-purple/10 to-transparent"></div>
                        <div
                            className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-street-orange/10 to-transparent"></div>

                        {/* Colorful corners */}
                        <div className="absolute top-0 left-0 w-12 h-2 bg-street-purple"></div>
                        <div className="absolute top-0 left-0 w-2 h-12 bg-street-purple"></div>
                        <div className="absolute top-0 right-0 w-2 h-12 bg-street-neon"></div>
                        <div className="absolute top-0 right-0 w-12 h-2 bg-street-neon"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-2 bg-street-orange"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-12 bg-street-orange"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-12 bg-street-red"></div>
                        <div className="absolute bottom-0 left-0 w-12 h-2 bg-street-red"></div>

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div>
                                <label htmlFor="name"
                                       className="block text-sm font-medium mb-1 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3 text-street-yellow"/>
                                    Come ti Chiami?
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Il tuo nome qui"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email"
                                       className="block text-sm font-medium mb-1 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3 text-street-yellow"/>
                                    La tua Mail
                                </label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@esempio.it"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject"
                                       className="block text-sm font-medium mb-1 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3 text-street-yellow"/>
                                    Di cosa vuoi parlare?
                                </label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="L'argomento del messaggio"
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                                />
                            </div>

                            <div>
                                <label htmlFor="message"
                                       className="block text-sm font-medium mb-1 flex items-center gap-1">
                                    <Sparkles className="h-3 w-3 text-street-yellow"/>
                                    Scrivi il tuo Messaggio
                                </label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Racconta qui la tua idea..."
                                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-street-purple focus:ring-street-purple/50"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full bg-gradient-street hover:bg-street-purple/80 transform hover:translate-y-[-3px] transition-all relative group">
    <span className="relative z-10 flex items-center gap-2">
        {status === "loading" ? "Invio in corso..." : "Mandaci il Messaggio"}
        {status !== "loading" && <Zap className="h-4 w-4 group-hover:animate-pulse"/>}
    </span>
                                <span
                                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-street-purple via-street-orange to-street-purple bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-80 transition-opacity rounded-md">
    </span>
                            </Button>

                            {status === "success" && (
                                <div
                                    className="text-center py-2 px-3 bg-green-500/20 border border-green-500/30 rounded-md flex items-center justify-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-400"/>
                                    <span className="text-green-400">Messaggio inviato con successo!</span>
                                </div>
                            )}

                            {status === "error" && (
                                <div
                                    className="text-center py-2 px-3 bg-red-500/20 border border-red-500/30 rounded-md flex items-center justify-center gap-2">
                                    <AlertCircle className="h-4 w-4 text-red-400"/>
                                    <span className="text-red-400">Errore nell'invio. Riprova più tardi.</span>
                                </div>
                            )}

                            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
                                <span className="w-10 h-px bg-white/10"></span>
                                Risposta garantita entro 24h
                                <span className="w-10 h-px bg-white/10"></span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;