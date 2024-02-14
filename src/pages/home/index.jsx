import { useState } from "react";
import { toast } from "react-toastify";

import QRGenerator from "./QRGenerator";

import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrData, setQrData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) {
      toast.error("Lütfen bir URL girin.");
      return;
    }

    if (!url.startsWith("http")) {
      toast.error("URL, http veya https ile başlamalıdır.");
      return;
    }

    setQrData(url);
    toast.success("QR Code başarıyla oluşturuldu.");

    setUrl("");
    setTimeout(() => setQrData(""), 5500);
  };

  return (
    <>
      <main className="container mx-auto flex flex-col gap-y-4 px-4">
        <p className="text-white font-semibold text-xl">
          QR Code oluşturmak için bir URL girin.
        </p>
        <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full h-20 text-xl font-semibold border-2 border-white border-opacity-20 px-4 bg-transparent outline-none focus:border-opacity-100 transition-colors rounded-md placeholder-white placeholder-opacity-50"
            placeholder="https://example.com/"
          />
          <div className="ml-auto">
            <button
              type="submit"
              className="px-4 h-14 bg-white text-black font-semibold text-lg rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!url || qrData}
            >
              QR Code Oluştur
            </button>
          </div>
        </form>
        {qrData && (
          <div className="flex items-center justify-center">
            <QRGenerator data={qrData} className="w-36 h-36" />
          </div>
        )}
      </main>
    </>
  );
}
