interface NumeroProps {
    numero: number;
}

function Numero(props: NumeroProps) {

    return(
        <div className="pl-3 h-8 basis-1/5  bg-gray-700" >
            <h1 className="font-sans text-2xl">
                {props.numero}
            </h1>
        </div>
    )
}

export default Numero;