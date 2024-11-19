"use client";

import Image from "next/image";

import { useEffect, lazy } from "react";

import bg from "public/assets/bg.jpg";
import bgResponsive from "public/assets/bgResponsive.jpg";
import img9 from "public/assets/img9.jpg";
import img30 from "public/assets/img30.png";
import meiosPagamento from "public/assets/meiospagto2-1.png";
import selo from "public/assets/Selo de Garantia de 7 Dias PNG Transparente Sem Fundo.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { Modules1 } from "@/components/Modules1";
import { Carousel } from "@/components/Carousel";
import { Footer } from "@/components/Footer";
import { BonusSection } from "@/components/BonusSection";
import { HiChevronDown } from "react-icons/hi";
const LazyGarantia = lazy(() => import("@/components/LazyGarantia"));
const LazyPrices = lazy(() => import("@/components/LazyPrices"));

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="relative bg-black h-screen">
        <div className="absolute">
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
        <div className="relative top-28 md:top-0 z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            O <span className="text-amber-500">Segredo</span> da Finalização
            <br /> Perfeita!
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-white mb-8 max-w-4xl">
            Seja a próxima profissional{" "}
            <span className="text-amber-500">especialista</span> em
            <br />
            <span className="text-amber-500">finalização</span> em cabelos
            <span className="text-amber-500"> crespo, cacheados e afro!</span>
          </h2>
          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl">
            <span className="text-amber-500">Domine as técnicas</span> do Método
            Alessandra Pavani, em cabelos com diferentes texturas e curvaturas
            proporcionando mais
            <span className="text-amber-500"> volume ou menos</span>, com
            definição e movimento!
          </p>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-12 md:px-40 rounded-md text-xl transition-all transform hover:scale-105">
            Começar Agora
          </button>
          <HiChevronDown className="text-white w-12 h-12 mt-12 animate-bounce" />
        </div>
      </div>

      <div className="bg-gradient-to-b from-black to-[#2d1a10] w-full flex flex-col justify-center h-full pb-20 px-8 md:px-0">
        <div className="flex flex-col items-center text-center pt-32 pb-6 md:pb-10">
          <h1 className="text-neutral-200 text-2xl md:text-4xl font-bold md:leading-[3rem] md:w-2/3 self-center">
            Você vai dominar as técnicas de finalização em cabelos ondulados,
            cacheados, crespo e afro
          </h1>
          <p className="text-neutral-200 text-lg md:text-xl mt-4 md:w-2/3 self-center">
            Entregando o
            <span className="text-amber-500 uppercase">
              {" "}
              melhor resultado para sua cliente,
            </span>{" "}
            e ainda tendo o seu day after por vários dias.
          </p>
        </div>
        <div className="flex w-fit items-center justify-center flex-col md:flex-row px-4 mx-auto gap-6">
          <div className="flex flex-wrap max-w-5xl items-center justify-center gap-6">
        <Modules1 />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#2d1a10] to-black w-full py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
        <h2 className="text-base text-amber-600 font-semibold tracking-wide uppercase">
          Aprenda com os melhores
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Transforme seu conhecimento em poder
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
          Com o Método Alessandra Pavani, você estará pronta para oferecer os melhores resultados para suas clientes.
        </p>
          </div>
          <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="ml-16 text-lg leading-6 font-medium text-orange-500">Técnicas Avançadas</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-300">
          Aprenda técnicas avançadas de finalização para cabelos ondulados, cacheados, crespos e afro.
            </dd>
          </div>
          <div className="relative">
            <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="ml-16 text-lg leading-6 font-medium text-orange-500">Resultados Duradouros</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-300">
          Garanta resultados duradouros e satisfação para suas clientes com técnicas que prolongam o day after.
            </dd>
          </div>
          <div className="relative">
            <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="ml-16 text-lg leading-6 font-medium text-orange-500">Produtos Certificados</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-300">
          Utilize produtos certificados e recomendados para obter os melhores resultados em cada tipo de cabelo.
            </dd>
          </div>
          <div className="relative">
            <dt>
          <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-amber-500 text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <p className="ml-16 text-lg leading-6 font-medium text-orange-500">Suporte Completo</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-300">
          Receba suporte completo durante o curso para tirar todas as suas dúvidas e garantir o seu aprendizado.
            </dd>
          </div>
        </dl>
          </div>
      </div>
      </div>
      <div className="bg-gradient-to-r from-orange-300 to-yellow-700/90 w-full h-16 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-slate-100">
          Além de tudo isso...
        </h2>
      </div>
      <BonusSection />
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
          <Carousel />
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
            <span className="text-amber-500 uppercase">Alessandra Pavani</span>
          </h1>
          <p className="text-md font-medium text-slate-200 mt-7">
            Atuante na área da beleza a 14 anos. Me especializei em cachos há 6
            anos atrás quando passei pela minha transição capilar, interna e
            profissional. Desenvolvi um método e técnicas de protocolo de
            atendimento humanizado e bem estar, técnicas avançadas de corte
            tratamento e finalização para fidelização de novos clientes.
          </p>
          <p className="text-md font-medium text-slate-200 mt-3">
            Hoje sou educadora na área de cabelos com curvatura do ondulado ao
            afro, ganhadora de dois prêmios em São Paulo em cabelos crespos e
            cacheados 2022, e sendo homenageada entre as mulheres Empreendedoras
            de Sucesso pela Revista Regional em 2022 e 2023. Criei o{" "}
            <span className="text-amber-500">MÉTODO ALESSANDRA PAVANI</span>{" "}
            para ensinar novos profissionais tradicionais a se tornarem
            referência em sua cidade á alcançarem um novo patamar profissional.
          </p>
          <p className="text-md font-roboto font-semibold tracking-wide text-amber-500 uppercase md:px-20 text-center my-6">
            o meu método já formou mais de 500 profissionais especialistas em
            cachos!!!
          </p>
          <a
            href="https://pay.hotmart.com/J88592474N?off=v33yu41h"
            target="blank"
          >
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
        <Footer />
      </div>
    </main>
  );
}
