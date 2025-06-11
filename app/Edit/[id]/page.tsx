import Editthis from "./Editthis";

interface Editpage{
    params: { id: string };
}

export default async function Editpage({ params }: Editpage){
    return <Editthis id={params.id}/>;
        
}