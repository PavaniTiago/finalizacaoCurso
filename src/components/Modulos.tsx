import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { HiChevronRight } from "react-icons/hi";

interface ModulosProps {
  title: string;
  img: StaticImageData;
  children?: React.ReactNode;
  text: string;
}

export default function Modulos({ title, img, children, text }: ModulosProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-[#1E1E1E] flex flex-col overflow-hidden rounded-xl shadow-lg transition-all duration-300 group hover:shadow-2xl hover:shadow-[#FFC857]/40">
      {/* Imagem com Gradiente */}
    <div className="relative">
      <Image
        decoding="async"
        src={img}
        alt={`Imagem do módulo ${title}`}
        className="h-[22rem] w-[16rem] object-cover rounded-t-xl transform group-hover:scale-105 transition-transform duration-300 hover:brightness-75 brightness-50"
      />
      <div className="absolute bottom-6 left-6 right-6 text-center">
        <h2 className="text-sm text-slate-300 tracking-wide mb-2 uppercase">
        {text}
        </h2>
        <p className="text-lg xl:text-2xl tracking-tight font-extrabold font-inter bg-gradient-to-r from-[#FFC857] to-[#FFAA33] bg-clip-text text-transparent uppercase">
        {title}
        </p>
      </div>
    </div>

      {/* Botão e Conteúdo Expandível */}
      <div className="py-4 px-3 w-64">
        <button
          className="flex items-center justify-start text-[#FFC857] font-semibold text-lg uppercase transition-colors hover:text-[#FFAA33] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiChevronRight
            className={`h-6 w-6 mr-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          Saiba Mais
        </button>
        {isOpen && (
          <div
            className="mt-4 p-3 text-sm text-slate-200 bg-[#2A2A2A] rounded-lg shadow-inner transition-all duration-300"
            style={{
              animation: isOpen ? "fadeIn 0.5s ease-in-out" : "",
            }}
          >
            {children}
          </div>
        )}
      </div>

      {/* Animação no Hover */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
