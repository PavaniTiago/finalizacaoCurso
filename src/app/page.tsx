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
    <main className="min-h-screen overflow-hidden bg-[#FAF7F5] text-[#5A5A5A]">
      {/* Hero Section */}
      <div className="relative h-screen bg-gradient-to-b from-[#F3ECE8] to-[#FAF7F5]">
        <Image
          className="absolute inset-0 w-full h-full object-cover brightness-90"
          src={bg}
          alt="Studio Alessandra Pavani"
          priority
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black bg-opacity-50 rounded-lg shadow-xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5E8E4] mb-6">
            O <span className="text-[#D9BBAA]">Segredo</span> da Finalização
            <br /> Perfeita!
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-3xl text-[#F5E8E4] mb-8 max-w-4xl">
            Seja a próxima profissional{" "}
            <span className="text-[#D9BBAA]">especialista</span> em
            <br />
            <span className="text-[#D9BBAA]">finalização</span> em cabelos
            <span className="text-[#D9BBAA]"> crespo, cacheados e afro!</span>
          </h2>
          <p className="text-lg md:text-xl text-[#E9D8D2] mb-12 max-w-3xl">
            <span className="text-[#D9BBAA] font-medium">
              Domine as técnicas
            </span>{" "}
            do Método Alessandra Pavani, em cabelos com diferentes texturas e
            curvaturas, proporcionando mais
            <span className="text-[#D9BBAA] font-medium"> volume ou menos</span>
            , com definição e movimento!
          </p>
          <button className="bg-[#D9BBAA] hover:bg-[#B89E94] text-[#F5E8E4] font-semibold py-3 px-12 md:px-40 rounded-md text-xl transition-transform transform hover:scale-105 shadow-md">
            Começar Agora
          </button>
          <HiChevronDown className="text-[#F5E8E4] w-12 h-12 mt-12 animate-bounce" />
        </div>
      </div>

      {/* Módulos Section */}
      <div className="bg-gradient-to-b from-[#FAF7F5] to-[#F3ECE8] w-full flex flex-col justify-center pb-20 px-8 md:px-0">
        <div className="flex flex-col items-center text-center pt-32 pb-10">
          <h1 className="text-[#5A5A5A] text-2xl md:text-4xl font-bold md:leading-[3rem] md:w-2/3">
            Você vai dominar as técnicas de finalização em cabelos ondulados,
            cacheados, crespo e afro
          </h1>
          <p className="text-[#7C7C7C] text-lg md:text-xl mt-4 md:w-2/3">
            Entregando o
            <span className="text-[#B89E94] uppercase">
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

      <div className="bg-gradient-to-t w-full flex flex-col items-center from-[#F3ECE8] to-[#D9BBAA] py-12">
        <div
          data-aos="fade-right"
          data-aos-duration="650"
          className="flex flex-col justify-center items-center max-w-5xl px-4 w-fit md:w-full"
        >
          <h1 className="text-center text-neutral-900 text-4xl md:text-6xl font-bold w-2/4 md:w-full px-12 md:px-2 h-fit py-4 bg-gradient-to-r from-[#F5E8E4] to-[#FAF7F5]">
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

      {/* Garantia Section */}
      <div className="bg-gradient-to-t from-[#F3ECE8] to-[#FAF7F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#5A5A5A] text-center mb-6">
            Garantia Incondicional de Satisfação
          </h2>
          <div className="max-w-4xl mx-auto">
            <LazyGarantia img={selo} />
          </div>
          <p className="text-center text-[#7C7C7C] mt-6">
            Se você não estiver 100% satisfeita, você tem até 7 dias para
            solicitar o reembolso sem complicações!
          </p>
        </div>
      </div>

      {/* Bonus Section */}
      <BonusSection />

      {/* Prices Section */}
      <div className="bg-gradient-to-b from-[#FAF7F5] to-[#F3ECE8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <LazyPrices img={meiosPagamento} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
