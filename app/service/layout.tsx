import Link from "next/link";

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-blue-500 text-white mt-6 grid grid-cols-2 gap-4">
        <Link href={"/service/service-one"}>Service One</Link>
        <Link href={"/service/service-two"}>Service Two</Link>
      </div>
      <div className="p-8">{children}</div>
    </>
  );
}
