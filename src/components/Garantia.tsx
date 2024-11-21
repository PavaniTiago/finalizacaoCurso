import Image from 'next/image';
import React from 'react';

export default function Garantia({ img }: { img: any }) {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto md:w-[60rem] space-x-12 gap-y-6 md:gap-y-0 text-[#5A5A5A]">
            <Image decoding="async" className="w-44 h-44 md:w-64 md:h-64" src={img} alt="Selo Garantia" />
            <div className="flex flex-col md:px-0 space-y-4">
                <h2 className="font-bold text-4xl md:text-5xl text-[#B89E94]">E a Garantia, eu tenho ela?</h2>
                <p className="font-semibold pr-2 md:pr-0 text-2xl">A garantia tradicional e simples é:</p>
                <p className="text-xl pr-8 md:pr-0">
                    Se em 7 dias, você não sentiu que irá se tornar especialista em cachos,
                    crespos e ondulados e se tornar referência na sua cidade,
                    pode mandar um e-mail pra minha equipe, e iremos devolver
                    100% do valor do seu investimento.
                </p>
            </div>
        </div>
    );
}
