import Modulos from "./Modulos";
import img28 from "public/assets/img28.jpg";
import img29 from "public/assets/img29.jpg";
import img31 from "public/assets/img31.jpg";
import img35 from "public/assets/img35.jpg";
import img41 from "public/assets/img41.jpg";
import img25 from "public/assets/img25.jpg";
import img21 from "public/assets/img21.jpg";
import img36 from "public/assets/img36.jpg";

export function Modules1(){
    return (
        <>
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
        </>
    )
}