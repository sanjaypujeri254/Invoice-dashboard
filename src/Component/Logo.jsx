import { PawPrint } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 bg-white">
      <div className="text-3xl font-bold text-gray-700 flex items-center">
        <span className="mr-1">Spark</span>
        <span className="text-purple-500 flex items-center">
          <PawPrint size={22} strokeWidth={2.5} />
        </span>
        <span className="font-normal text-gray-500">nomy</span>
      </div>
      <p className="mt-2 text-gray-500 text-sm">
        sparking the creator economy
      </p>
    </div>
  );
}
