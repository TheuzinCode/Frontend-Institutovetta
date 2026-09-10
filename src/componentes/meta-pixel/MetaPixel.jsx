import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/* Dispara um PageView do Meta Pixel a cada troca de rota.
   O código base no index.html já conta o carregamento inicial,
   então guardamos a rota atual e só disparamos quando ela muda. */

const MetaPixel = () => {

    const { pathname, search } = useLocation();
    const ultimaRota = useRef(pathname + search);

    useEffect(() => {
        const rotaAtual = pathname + search;

        if (ultimaRota.current === rotaAtual) return;
        ultimaRota.current = rotaAtual;

        if (typeof window.fbq === "function") {
            window.fbq("track", "PageView");
        }
    }, [pathname, search]);

    return null;
};

export default MetaPixel;
