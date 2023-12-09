import Data from "@/components/FetchDataFromServer";

export default function Home() {
  return (
    <div className="flex h-screen w-full justify-center bg-gray-200 pt-40">
      <div className="flex flex-col gap-5 text-center">
        <h1 className={"text-5xl font-bold"}>NextJs + tRPC</h1>
        <Data />
        <p>
          <span className="font-semibold">{`Get started by editing "server/index.ts file"`}</span>
        </p>
      </div>
    </div>
  );
}
