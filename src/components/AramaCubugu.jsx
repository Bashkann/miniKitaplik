import React from "react";

export default function AramaCubugu({ aramaMetni, onAramaChange }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label htmlFor="arama" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
        Başlık veya yazara göre arayın:
      </label>
      <input
        id="arama"
        type="text"
        placeholder="Kitap adı veya yazar..."
        value={aramaMetni}
        onChange={onAramaChange}
        style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
      />
    </div>
  );
}
