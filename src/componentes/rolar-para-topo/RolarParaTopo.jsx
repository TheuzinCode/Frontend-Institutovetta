import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Volta a página para o topo a cada troca de rota,
   para o cabeçalho fixo iniciar sempre transparente. */

const RolarParaTopo = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default RolarParaTopo;
