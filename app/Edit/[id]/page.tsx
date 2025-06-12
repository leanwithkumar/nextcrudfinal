import Editthis from "./Editthis";

export default function Editpage({ params }: { params: { id: string } }) {
  return <Editthis id={params.id} />;
}
