import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </h1>
        <p className="text-lg text-gray-500">
          <a href="https://github.com/joshua-murphy">Joshua Murphy</a>
        </p>
      </div>
    </main>
  );
}
