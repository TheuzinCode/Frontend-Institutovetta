/* Dispara um evento padrão do Meta Pixel (Lead, Contact, etc).

   Sai sem fazer nada se o fbq não tiver carregado — bloqueador de
   anúncios, rede lenta ou falha da Meta não podem quebrar o formulário. */

export function rastrearEvento(nome, parametros = {}) {

    if (typeof window.fbq !== "function") return;

    window.fbq("track", nome, parametros);
}
