// COLOQUE AQUI O WHATSAPP DA STRIT, com código do país e DDD.
// Exemplo para MG: 5531999999999
const numeroWhatsApp = "5500000000000";

function comprar(produto){
  const mensagem = `Olá! Vi o produto "${produto}" no site da STRIT e tenho interesse. Gostaria de saber disponibilidade, tamanhos e formas de pagamento.`;
  window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`,"_blank");
}

const filtros=document.querySelectorAll(".filter");
const cards=document.querySelectorAll(".card");
const empty=document.querySelector(".empty");

filtros.forEach(f=>{
  f.addEventListener("click",()=>{
    filtros.forEach(x=>x.classList.remove("active"));
    f.classList.add("active");
    const cat=f.dataset.filter;
    let count=0;
    cards.forEach(card=>{
      const show=cat==="todos" || card.dataset.category===cat;
      card.style.display=show?"":"none";
      if(show) count++;
    });
    empty.style.display=count?"none":"block";
  });
});
