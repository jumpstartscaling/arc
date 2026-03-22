export default async function DynamicPseoPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Dynamic pSEO Page</h1>
      <p className="mt-2 text-gray-600">Slug: {slug?.join("/") ?? "home"}</p>
    </div>
  );
}
