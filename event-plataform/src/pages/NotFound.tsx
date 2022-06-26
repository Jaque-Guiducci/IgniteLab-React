import { Button } from "../components/Button"
import { Error } from "../components/Error"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function NotFound(){

    return (

        <div>
        
            <div className="flex min-h-[680px] max-w-screen items-center justify-between mx-60">

                <div>
                    <Error/>
                </div>
                

                <div>
                    <h1 className="mt-8 text-[5rem] leading-tight text-blue-500 font-bold">404...</h1>

                    <span className="mt-2 block text-2xl">Parece que você foi longe demais!</span>

                    <span className="my-10 block text-2xl">Retorne ao nosso IgniteLab</span>

                    <Button color="green" url="/event">
                        <span>VOLTAR A HOME</span>
                    </Button>
                </div>
            </div>

        </div>
        
    )


}