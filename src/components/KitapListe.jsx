import React from "react";
import KitapKarti from "./KitapKarti";

export default function KitapListe({ kitaplar, favoriler, onFavoriToggle }) {
  if (!kitaplar.length) return <p>Arama kriterlerine uyan kitap bulunamadı.</p>;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {kitaplar.map((kitap) => (
        <KitapKarti key={kitap.id} kitap={kitap} isFavori={favoriler.includes(kitap.id)} onFavoriToggle={onFavoriToggle} />
      ))}
    </div>
  );
}
