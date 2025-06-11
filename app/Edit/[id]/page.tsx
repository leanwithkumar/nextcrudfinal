import Editthis from "./Editthis";

interface Editpage{
    params: { id: string };
}

export default function Editpage({ params }: Editpage){
    return <Editthis id={params.id}/>;
        
}