import React from "react";

export default function FavoriPanel({ favoriKitaplar, onFavoriKaldir }) {
  return (
    <div style={{ backgroundColor: "#f9fafb", padding: "16px", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      {favoriKitaplar.length === 0 ? <p>Henüz favori kitap eklemediniz.</p> :
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {favoriKitaplar.map(k => (
            <li key={k.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px", border: "1px solid #e5e7eb", borderRadius: "6px", marginBottom: "6px" }}>
              {k.baslik}
              <button onClick={() => onFavoriKaldir(k.id)} style={{ background: "none", border: "none", color: "#dc2626", cursor: "pointer" }}>Kaldır</button>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

