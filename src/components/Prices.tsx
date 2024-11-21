import Image from 'next/image';
import React from 'react';

export default function Prices({ img }: { img: any }) {
    return (
        <div className="flex flex-col items-center text-center space-y-8 bg-gradient-to-b from-[#FAF7F5] to-[#F3ECE8] py-12 px-6 md:px-12 shadow-md rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A5A5A]">
                Invista no Seu Futuro
            </h2>
            <div className="flex flex-col items-center space-y-4">
                <h3 className="text-4xl font-extrabold text-[#B89E94]">
                    DESCONTO!
                </h3>
                <p className="text-xl text-[#7C7C7C] font-medium">
                    Aproveite esta oferta especial nas técnicas de finalização para cachos.
                </p>
                <p className="text-2xl font-bold text-[#5A5A5A] line-through">
                    599,00
                </p>
                <p className="text-3xl font-extrabold text-[#B89E94]">
                    Parcelado em 10x de <span className="text-[#A88C84]">R$29,79</span>
                </p>
                <p className="text-lg text-[#7C7C7C]">*Sem juros por R$297,90</p>
            </div>
            <Image decoding="async" className="w-96" src={img} alt="Meios de Pagamento" />
            <button className="bg-[#B89E94] hover:bg-[#A88C84] text-white py-3 px-12 rounded-md text-lg font-bold transition-transform transform hover:scale-105">
                Compre Aqui com o Cartão
            </button>
            <p className="text-[#7C7C7C] text-sm mt-4">
                Parcelamos em até 12x para que você possa transformar seu sonho em realidade sem pesar no bolso!
            </p>
        </div>
    );
}
