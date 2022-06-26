
interface ButtonProps {
    color: 'green' | 'blue';
    url: string;
    children?: React.ReactNode;
}

export function Button(props: ButtonProps){
    return(

        <div>
            {props.color == 'green' ? (                

                <a href={props.url} className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                    {props.children}
                </a>
            ) : (
                <a href={props.url} className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-500 transition-colors">
                    {props.children}
                </a>
            )}

        </div>

    )

}