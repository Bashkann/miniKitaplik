import React from "react";

export default function KategoriFiltre({ seciliKategori, kategoriler, onKategoriChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="kategori" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Türü:</label>
      <select
        id="kategori"
        value={seciliKategori}
        onChange={onKategoriChange}
        style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      >
        {kategoriler.map((kat) => (
          <option key={kat} value={kat}>
            {kat === "tumu" ? "Tüm Kategoriler" : kat}
          </option>
        ))}
      </select>
    </div>
  );
}
