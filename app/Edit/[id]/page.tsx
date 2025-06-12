import Editform from "@/app/components/Editform";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <Editform id={resolvedParams.id} />;
}