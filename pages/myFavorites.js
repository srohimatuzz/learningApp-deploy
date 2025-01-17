import { useEffect, useState } from 'react';

const MyFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Mengambil data kursus favorit dari localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleRemoveFavorite = (id) => {
    // Menghapus kursus dari daftar favorit
    const updatedFavorites = favorites.filter((course) => course.id !== id);
    setFavorites(updatedFavorites);
    // Simpan kembali ke localStorage
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-black mb-8">Kursus Favorit Saya</h1>

      {favorites.length === 0 ? (
        <p className="text-lg text-gray-600">Belum ada kursus favorit.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden border-1 border-green-400 transform hover:scale-105 transition duration-300 max-w-xs mx-auto relative"
            >
              {/* Tombol Hapus */}
              <button
                onClick={() => handleRemoveFavorite(course.id)}
                className="absolute top-2 right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center shadow hover:bg-red-600"
                title="Hapus kursus ini"
              >
                X
              </button>
              <div className="relative">
                <img
                  src={course.imageUrl}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorites;
