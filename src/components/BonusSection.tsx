import LazyBonus from "./LazyBonus";
import img36 from "public/assets/img36.jpg";

export function BonusSection(){
    return (
        <div className="bg-gradient-to-t from-[#F3ECE8] to-[#D9BBAA] w-full">
        <div
          data-aos="fade-top"
          data-aos-duration="650"
          className="flex flex-col justify-center items-center pt-10 pb-16 gap-8"
        >
          <div className="px-6 lg:w-2/4 space-y-6 text-xl md:text-3xl md:font-medium text-white text-center">
            <p>
              Você vai{" "}
              <span className="text-rose-50 uppercase">
                ganhar um bônus completo
              </span>{" "}
              de corte molhado em cabelos crespos, passo a passo com a{" "}
              <span className="text-rose-50 uppercase">
                Método Alessandra Pavani.
              </span>
            </p>
            <p>Tornado suas fieis com o seu trabalho.</p>
            <p>
              Você vai aumentar o seu faturamento de
              <span className="text-rose-50 uppercase">
                {" "}
                2 a 3 mil reais mensal.{" "}
              </span>
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <LazyBonus
              title="Corte em Cabelo Crespo Molhado em Camadas Altas com franja"
              img={img36}
              text="BÔNUS"
              person="@alessandrapavani"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Introdução</span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">Higienização + Acidificação</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Nutrição</span>
              </p>
              <p className="font-bold">
                - Aula 4. <span className="font-normal">Corte</span>
              </p>
              <p className="font-bold">
                - Aula 5. <span className="font-normal">Finalização</span>
              </p>
              <p className="font-bold">
                - Aula 6. <span className="font-normal">Difusor</span>
              </p>
              <p className="font-bold">
                - Aula 7. <span className="font-normal">Finalização</span>
              </p>
              <p className="font-bold">
                - Aula 8. <span className="font-normal">Volume</span>
              </p>
              <p className="font-bold">
                - Aula 9.{" "}
                <span className="font-normal">Brilho + Resultado</span>
              </p>
            </LazyBonus>
          </div>
          <a
            href="https://pay.hotmart.com/J88592474N?off=v33yu41h"
            target="blank"
          >
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
              Sim eu quero
            </button>
          </a>
        </div>
      </div>
    )
}