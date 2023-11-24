"use client";

import Image from "next/image";

import { useEffect, lazy } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import bg from "public/assets/bg.jpg";
import bgResponsive from "public/assets/bgResponsive.jpg";
import img9 from "public/assets/img9.jpg";
import img14 from "public/assets/img14.webp";
import img15 from "public/assets/img15.webp";
import img20 from "public/assets/img20.webp";
import img21 from "public/assets/img21.jpg";
// import img22 from "public/assets/img22.webp";
import img23 from "public/assets/img23.jpg";
import img25 from "public/assets/img25.jpg";
import img26 from "public/assets/img26.webp";
import img28 from "public/assets/img28.jpg";
import img29 from "public/assets/img29.jpg";
import img30 from "public/assets/img30.png";
import img31 from "public/assets/img31.jpg";
import img32 from "public/assets/img32.webp";
import img34 from "public/assets/img34.jpg";
import img35 from "public/assets/img35.jpg";
import img36 from "public/assets/img36.jpg";
import img41 from "public/assets/img41.jpg";
// import img37 from "public/assets/img37.webp";
// import img38 from "public/assets/img38.webp";
// import img39 from "public/assets/img39.webp";
import img40 from "public/assets/img40.webp";
import meiosPagamento from "public/assets/meiospagto2-1.png";
import selo from "public/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png";

import Modulos from "@/components/Modulos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Aos from "aos";
import "aos/dist/aos.css";

const LazyBonus = lazy(() => import("@/components/LazyBonus"))
const LazyDropDown = lazy(() => import("@/components/LazyDropDown"))
const LazyGarantia = lazy(() => import("@/components/LazyGarantia"))
const LazyPrices = lazy(() => import("@/components/LazyPrices"))

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-full flex flex-col overflow-hidden">
          <Image
            className="md:w-full md:h-screen object-cover brightness-50 sm:h-[20rem] hidden xl:block"
            src={bg}
            alt="foto do studio alessandra pavani"
            decoding="async"
            width={0}
            height={0}
            priority  
            sizes="100vw"
          />
          <Image
            className="md:w-full md:h-screen object-cover brightness-50 sm:h-[20rem] block xl:hidden"
            src={bgResponsive}
            alt="foto do studio alessandra pavani"
            decoding="async"
            priority
          />
        </div>
        <div className="bg-black w-full h-[32rem] lg:hidden"></div>
        <div
          className="absolute top-[18rem] md:top-[58rem] xl:top-[10rem] md:mb-[6rem] flex flex-col 3xl:max-w-5xl items-center justify-center xl:ml-96"
        >
          <h1 className="text-center text-white text-2xl md:text-6xl 3xl:text-7xl font-semibold mb-6">
          O <span className="text-amber-500 uppercase">segredo</span> da finalização <br /> Perfeita!
          </h1>
          <h2 className="3xl:text-3xl text-xl md:text-3xl md:font-semibold mt-3 text-white leading-tight sm:px-4 text-center mb-6">
            Seja a próxima profissional{" "}
            <span className="text-amber-500 uppercase">
            especialista{" "}  
            </span>
            em <br /> 
            <span className="text-amber-500 uppercase">
            finalização{" "}
            </span>
            em cabelos {" "}
            <span className="text-amber-500 uppercase">
            crespo, cacheados e afro!
            </span>
          </h2>
          <p className="xl:w-2/5 3xl:text-3xl text-xl md:text-3xl md:font-semibold mt-3 text-white leading-tight sm:px-4 text-center mb-12">
            <span className="text-amber-500 uppercase">
            Venha dominar as técnicas{" "}
            </span>
            do Método Alessandra Pavani, em cabelos com diferentes
            texturas e curvaturas{" "}
            <span className="text-amber-500 uppercase">
            proporcionando mais volume <span className="text-white">ou</span> menos 
            </span>
            , deixando com definição
            e movimento, tornando as clientes{" "}
            <span className="text-amber-500 uppercase">
            fiéis e fãs do seu trabalho!
            </span>
          </p>
          <a href="https://pay.hotmart.com/J88592474N?off=v33yu41h" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
              Compre Agora!
            </button>
          </a>
        </div>
      </div>
      <div className="bg-gradient-to-b from-black to-[#2d1a10] w-full flex flex-col justify-center h-full pb-20 px-8 md:px-0">
        <h1
          className="text-neutral-200 text-2xl md:text-4xl font-bold md:leading-[3rem] md:w-2/3 self-center pt-32 pb-6 md:pb-10 text-center"
        >
          Você vai dominar as técnicas de finalização em cabelos ondulados, cacheados, crespo e afro 
          entregando o
          <span className="text-amber-500 uppercase">
          {" "} melhor resultado para sua cliente,
          </span>
          {" "} e ainda tendo o seu day after por vários dias.
        </h1>
        <div className="flex w-fit items-center justify-center flex-col md:flex-row px-4 mx-auto gap-6">
          <div
            className="flex flex-wrap max-w-5xl items-center justify-center gap-6"
          >
            <Modulos title="Finalização Cabelo Crespo Curto" img={img35} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Secagem;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Cacheado Médio Long Bob" img={img28} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Secagem e ajuste;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Antes e depois;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Afro Coração" img={img21} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Difusor;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Antes e depois;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Cacheado Longo Camadas Altas" img={img29} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Ajuste é resultado final;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Médio Crespo Camadas Altas " img={img31} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Resultado final;</span>
              </p>
            </Modulos>

            <Modulos
              title="Finalização Cabelo Crespo Black Power Volumão"
              img={img25}
              text="MÓDULO"
            >
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Secagem;</span>
              </p>
              <p className="font-bold">
                - Aula 3. <span className="font-normal">Dica de Volume;</span>
              </p>
              <p className="font-bold">
                - Aula 4. <span className="font-normal">Resultado Final;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Ondulado Assimétrico" img={img41} text="MÓDULO">
              <p className="font-bold">
                - Aula 1. <span className="font-normal">Finalização;</span>
              </p>
              <p className="font-bold">
                - Aula 2. <span className="font-normal">Resultado Final;</span>
              </p>
            </Modulos>

            <Modulos title="Finalização Cabelo Crespo Camadas Altas, com Franja, com volume e sem volume." img={img36} text="MÓDULO">
            </Modulos>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-orange-300 to-yellow-700/90 w-full h-16 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-100">
          Além de tudo isso...
        </h2>
      </div>
      <div className="bg-gradient-to-t from-[#130e0b] to-[#2d1a10] w-full">
        <div
          data-aos="fade-top"
          data-aos-duration="650"
          className="flex flex-col justify-center items-center pt-10 pb-16 gap-8"
        >
          <div className="px-6 lg:w-2/4 space-y-6 text-xl md:text-3xl md:font-medium text-slate-200 text-center">
            <p> 
            Você vai <span className="text-amber-500 uppercase">ganhar um bônus completo</span> de corte molhado em cabelos crespos, passo a passo com a <span className="text-amber-500 uppercase">Método Alessandra Pavani.</span>  
            </p>
            <p>Tornado suas fieis com o seu trabalho.</p>
            <p>
            Você vai aumentar o seu faturamento de 
              <span className="text-amber-500 uppercase">
                {" "}
                2 a 3 mil reais mensal.{" "}
              </span>
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-4">
            <LazyBonus title="Corte em Cabelo Crespo Molhado em Camadas Altas com franja" img={img36} text="BÔNUS" person="@alessandrapavani">
              <p className="font-bold">
                - Aula 1.{" "}
                <span className="font-normal">
                  Introdução
                </span>
              </p>
              <p className="font-bold">
                - Aula 2.{" "}
                <span className="font-normal">
                  Higienização + Acidificação
                </span>
              </p>
              <p className="font-bold">
                - Aula 3.{" "}
                <span className="font-normal">
                  Nutrição
                </span>
              </p>
              <p className="font-bold">
                - Aula 4.{" "}
                <span className="font-normal">
                  Corte
                </span>
              </p>
              <p className="font-bold">
                - Aula 5.{" "}
                <span className="font-normal">
                 Finalização
                </span>
              </p>
              <p className="font-bold">
                - Aula 6.{" "}
                <span className="font-normal">
                 Difusor
                </span>
              </p>
              <p className="font-bold">
                - Aula 7.{" "}
                <span className="font-normal">
                 Finalização
                </span>
              </p>
              <p className="font-bold">
                - Aula 8.{" "}
                <span className="font-normal">
                 Volume
                </span>
              </p>
              <p className="font-bold">
                - Aula 9.{" "}
                <span className="font-normal">
                 Brilho + Resultado
                </span>
              </p>
            </LazyBonus>
          </div>
          <a href="https://pay.hotmart.com/J88592474N?off=v33yu41h" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
              Sim eu quero 
            </button>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center relative">
        <div className="w-full relative">
          <Image
            className="w-full h-[55rem] object-cover object-top brightness-75"
            src={img9}
            alt="foto do studio alessandra pavani"
            decoding="async"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="650"
          className="absolute flex flex-col justify-center items-center"
        >
          <div
            data-aos="fade-right"
            data-aos-duration="650"
            className="flex flex-col items-center max-w-5xl px-4 w-fit md:w-full"
          >
            <h1 className="text-center text-neutral-900 text-4xl md:text-6xl font-bold w-2/4 md:w-full px-12 md:px-2 h-fit py-4 bg-gradient-to-r from-orange-300 to-yellow-700/90">
              Esses são os resultados que você irá aprender
            </h1>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Sem química totalmente natural
            </h2>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Com produtos assertivos 
            </h2>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Muita definição 
            </h2>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Muito volume 
            </h2>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Ou pouco volume
            </h2>
            <h2 className="text-2xl md:text-3xl mt-6 px-[20rem] text-white leading-tight md:px-4 text-center">
            ✔ Cachos com movimento
            </h2>
          </div>
          <div className="flex mt-12">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={5}
              pagination={{ clickable: true }}
              loop={true}
              className="w-[65rem] h-fit 3xl:w-[80rem]"
            >
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img25}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img14}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img21}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img20}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img15}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img40}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img23}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  decoding="async"
                  src={img32}
                  alt="foto de cabelos cacheados"
                  className="rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="w-full bg-black flex flex-col md:flex-row items-center justify-center gap-x-24 pt-16">
        <div
          data-aos="fade-left"
          data-aos-duration="650"
          className="hidden md:flex h-full align-bottom"
        >
          <Image decoding="async" src={img30} className="w-[24rem]" alt="" />
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="650"
          className="max-w-2xl px-8 md:px-0 mb-12"
        >
          <h1 className="text-3xl text-slate-100 mb-2">
            QUEM É{" "}
            <span className="text-amber-500 uppercase">
              Alessandra Pavani
            </span>
          </h1>
          <p className="text-md font-medium text-slate-200 mt-7">
            Atuante na área da beleza a 14 anos. Me
            especializei em cachos há 6 anos atrás quando passei pela minha
            transição capilar, interna e profissional. Desenvolvi um método e técnicas de
            protocolo de atendimento humanizado e bem estar, técnicas avançadas
            de corte tratamento e finalização para fidelização de novos clientes.
          </p>
          <p className="text-md font-medium text-slate-200 mt-3">
            Hoje sou educadora na área de cabelos com curvatura do ondulado ao afro, ganhadora de dois prêmios em
            São Paulo em cabelos crespos e cacheados 2022, e sendo homenageada
            entre as mulheres Empreendedoras de Sucesso pela Revista Regional em
            2022 e 2023. Criei o <span className="text-amber-500">MÉTODO ALESSANDRA PAVANI</span> para ensinar novos
            profissionais tradicionais a se tornarem referência em sua cidade á alcançarem
            um novo patamar profissional.
          </p>
          <p className="text-md font-roboto font-semibold tracking-wide text-amber-500 uppercase md:px-20 text-center my-6">
            o meu método já formou mais de 500 profissionais especialistas em cachos!!!
          </p>
          <a href="https://pay.hotmart.com/J88592474N?off=v33yu41h" target="blank">
            <button className="ease-in-out duration-300 hover:bg-neutral-900 hover:text-slate-50 mt-4 md:mt-0 3xl:mt-4 mx-auto md:w-[42rem] flex justify-center px-16 py-3 bg-slate-50 font-semibold text-xl md:text-2xl rounded transition-colors cursor-pointer shadow-lg">
              Compre Agora!
            </button>
          </a>
        </div>
      </div>

      <div className="bg-slate-200 w-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center md:justify-start">
          <div className="relative w-full">
            <Image
              decoding="async"
              src={bgResponsive}
              alt=""
              className="brightness-[0.2] h-[48rem] w-full object-cover object-top"
            />
          </div>
          <div className="absolute md:left-[16rem]">
            <LazyPrices
              data-aos="fade-right"
              data-aos-duration="650"
              img={meiosPagamento}
            />
          </div>
        </div>
        <div className="w-full flex items-center flex-col bg-gradient-to-tl to-black from-[#2d1a10]">
          <div
            data-aos="fade-right"
            data-aos-duration="650"
            className="max-w-4xl py-16 "
          >
            <LazyGarantia img={selo} />
          </div>
          <div
            data-aos="fade-top"
            data-aos-duration="650"
            className="flex justify-center w-full py-14"
          >
            <div className="flex flex-col space-y-12 w-[80rem]">
              <h2 className="text-4xl px-[20rem] md:px-0 md:text-5xl font-bold text-yellow-500 w-[60rem] self-center text-center">
                O que os alunos do Método Alessandra Pavani falam do curso
              </h2>
              <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-10">
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/l89UeUSaFVM"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/mkWViwiT_2c?si=dKwpKAtMxH7CimKy"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/tIM49R67yQM"
                ></iframe>
                <iframe
                  className="md:w-[18rem]"
                  src="https://www.youtube.com/embed/KhlYWH-Rymc"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
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
            <a href="https://pay.hotmart.com/J88592474N?off=v33yu41h" target="blank">
              Compre Agora!
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
