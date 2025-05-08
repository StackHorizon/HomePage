// src/components/CookieBanner.tsx
import React from "react";
import CookieConsent from "react-cookie-consent";
import {Button} from "@/components/ui/button";
import {Sparkles, Shield, Cookie} from "lucide-react";

const CookieBanner: React.FC = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accetto"
            declineButtonText="Solo essenziali"
            enableDeclineButton
            flipButtons
            style={{
                background: "rgba(10, 10, 20, 0.9)",
                backdropFilter: "blur(10px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                fontFamily: "inherit",
                padding: "1rem",
                zIndex: 9999,
            }}
            buttonStyle={{
                background: "var(--street-orange)",
                color: "white",
                fontSize: "14px",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                fontWeight: "bold",
            }}
            declineButtonStyle={{
                background: "transparent",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                fontSize: "14px",
                borderRadius: "6px",
                padding: "0.5rem 1rem",
                marginRight: "1rem",
            }}
            contentStyle={{
                flex: "1",
            }}
            buttonWrapperClasses="flex items-center gap-2"
            expires={150}
        >
            <div className="flex items-start gap-4">
                <div className="bg-street-purple/20 p-2 rounded-lg hidden sm:block">
                    <Cookie className="h-6 w-6 text-street-orange"/>
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-street-neon"/>
                        <h3 className="font-bold">Privacy e Cookie</h3>
                        <Sparkles className="h-3 w-3 text-street-yellow"/>
                    </div>
                    <p className="text-sm text-gray-300">
                        Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
                        Alcuni sono essenziali, altri ci aiutano ad analizzare come utilizzi il sito.{" "}
                        <a
                            href="./privacy"
                            className="text-street-purple hover:text-street-neon underline transition-colors"
                        >
                            Privacy policy
                        </a>
                    </p>
                </div>
            </div>
        </CookieConsent>
    );
};

export default CookieBanner;