import React, { useState, useEffect } from 'react';
import './App.css';
import AramaCubugu from './components/AramaCubugu';
import KategoriFiltre from './components/KategoriFiltre';
import KitapListe from './components/KitapListe';
import FavoriPanel from './components/FavoriPanel';

// Sabit kitap verisi
const SABIT_KITAPLAR = [
  { id: 1, baslik: "React'e Giriş", yazar: "K. Başkan", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "B. Demir", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "Z. Ateş", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "A. Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "S. Ak", kategori: "Tasarım" },
  { id: 6, baslik: "Python Programlama", yazar: "M. Vural", kategori: "CS" },
  { id: 7, baslik: "CSS - Derinlemesine", yazar: "L. Çelik", kategori: "Web" },
];

const tumKategoriler = ['tumu', ...new Set(SABIT_KITAPLAR.map(k => k.kategori))];

function App() {
  const [aramaMetni, setAramaMetni] = useState(() => localStorage.getItem('aramaMetni') || '');
  const [kategori, setKategori] = useState('tumu');
  const [favoriler, setFavoriler] = useState(() => {
    const kayitli = localStorage.getItem('favoriler');
    try {
      return kayitli ? JSON.parse(kayitli) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => { localStorage.setItem('aramaMetni', aramaMetni); }, [aramaMetni]);
  useEffect(() => { localStorage.setItem('favoriler', JSON.stringify(favoriler)); }, [favoriler]);

  const handleAramaChange = e => setAramaMetni(e.target.value);
  const handleKategoriChange = e => setKategori(e.target.value);
  const handleFavoriToggle = kitapId => {
    setFavoriler(prev => prev.includes(kitapId) ? prev.filter(id => id !== kitapId) : [...prev, kitapId]);
  };
  const handleFavoriKaldir = kitapId => setFavoriler(prev => prev.filter(id => id !== kitapId));

  const filtrelenmisKitaplar = SABIT_KITAPLAR
    .filter(kitap => kategori === 'tumu' || kitap.kategori === kategori)
    .filter(kitap => {
      const arama = aramaMetni.toLowerCase();
      return kitap.baslik.toLowerCase().includes(arama) || kitap.yazar.toLowerCase().includes(arama);
    });

  const favoriKitaplar = SABIT_KITAPLAR.filter(kitap => favoriler.includes(kitap.id));

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Mini Kitaplık</h1>
      </header>

      {/* Main content */}
      <div className="main-container">
        {/* Sol sütun */}
        <div className="left-column">
          <div className="card">
            <AramaCubugu aramaMetni={aramaMetni} onAramaChange={handleAramaChange} />
            <KategoriFiltre seciliKategori={kategori} kategoriler={tumKategoriler} onKategoriChange={handleKategoriChange} />
          </div>
          <KitapListe kitaplar={filtrelenmisKitaplar} favoriler={favoriler} onFavoriToggle={handleFavoriToggle} />
        </div>

        {/* Sağ sütun */}
        <div className="right-column">
          <FavoriPanel favoriKitaplar={favoriKitaplar} onFavoriKaldir={handleFavoriKaldir} />
        </div>
      </div>
    </div>
  );
}

export default App;
