export function Footer(){

    return(

        <div className="flex items-center justify-between mx-8 border-t border-gray-500 fixed bottom w-[1085px]">

            <div className="flex mt-6">
                <img src="/src/assets/logo-rockeat.png" alt="Logo Rocketseat" />

                <span className="ml-10 text-gray-300">
                    Rocketseat - Todos os direitos reservados
                </span>
            </div>
            

            <a href="#" className=" mt-6 text-gray-300">
                Políticas de Privacidade
            </a>

        </div>

    )

}