import LazyDropDown from "./LazyDropDown";

export function Footer() {
  return (
    <>
      <div
        data-aos="fade-bottom"
        data-aos-duration="650"
        className="max-w-xl mx-auto p-4 mt-6 md:mt-12 mb-2 md:mb-8"
      >
        <h1 className="text-neutral-900 text-center text-3xl md:text-5xl font-bold mb-10 md:mb-12">
          Perguntas Frequentes
        </h1>
        <LazyDropDown
          question="Como vou ter acesso ao curso? "
          answer="O curso é online e permanece disponível na plataforma Hotmart. 
            Os vídeos contendo aulas teóricas e práticas são gravados e poderão ser vistos e revisitados, por um período de um ano, nesta plataforma.
            Ao adquirir o curso, você precisará configurar um acesso, seguindo orientações de um e-mail que chegará no endereço eletrônico cadastrado por você."
        />
        <LazyDropDown
          question="O curso fornece certificado?"
          answer="Sim! Ao concluir 100% das aulas, você poderá gerar automaticamente o seu certificado de conclusão."
        />
        <LazyDropDown
          question="Consigo assistir do meu smartphone? "
          answer="Sim, você poderá acessar nosso conteúdo via smartphone"
        />
        <LazyDropDown
          question="Quanto tempo vou ter para consumir o material? "
          answer="Você pode ver e rever o curso sempre que desejar, por um período de 24 meses após a compra. 
            Lembrando que no período de um ano, você vai receber atualizações do curso, expandindo ainda mais o seu faturamento, sem nenhum custo por isso."
        />
        <LazyDropDown
          question="Como funcionam as garantia incondicional?"
          answer="Garantia incondicional
            Caso perceba que nosso conteúdo não é para você, você terá um prazo de 7 dias para desistir da compra. 
            Dentro deste período, você poderá solicitar o cancelamento e reembolso diretamente na plataforma. Sem questionamentos."
        />
      </div>
      <div
        className="bg-neutral-900 hover:text-neutral-900 text-slate-100 mx-auto md:w-[42rem] flex justify-center mb-12 px-16 md:px-2 py-3 
        hover:bg-slate-50 font-semibold text-2xl rounded transition-colors cursor-pointer shadow-xl"
      >
        <button className="transition-all ease-in-out duration-300">
          <a
            href="https://pay.hotmart.com/J88592474N?off=v33yu41h"
            target="blank"
          >
            Compre Agora!
          </a>
        </button>
      </div>
    </>
  );
}
