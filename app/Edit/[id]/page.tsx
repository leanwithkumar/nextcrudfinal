import Editthis from "./Editthis";

interface EditPageProps {
  params: {
    id: string;
  };
}

// ✅ Marking this as async (required by Next.js for dynamic routes)
export default async function Editpage({ params }: EditPageProps) {
  return <Editthis id={params.id} />;
}
