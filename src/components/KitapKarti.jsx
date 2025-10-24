import React from "react";

export default function KitapKarti({ kitap, isFavori, onFavoriToggle }) {
  const { baslik, yazar, kategori } = kitap;
  return (
    <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white" }}>
      <div>
        <h3 style={{ fontWeight: "bold" }}>{baslik}</h3>
        <p>{yazar}</p>
        <span style={{ padding: "2px 6px", backgroundColor: "#dbeafe", borderRadius: "9999px" }}>{kategori}</span>
      </div>
      <button
        onClick={() => onFavoriToggle(kitap.id)}
        style={{ backgroundColor: isFavori ? "#fee2e2" : "#dbeafe", color: isFavori ? "#dc2626" : "#2563eb", border: "none", padding: "6px 12px", borderRadius: "6px", cursor: "pointer" }}
      >
        {isFavori ? "Favoriden Çıkar" : "Favori Ekle"}
      </button>
    </div>
  );
}
