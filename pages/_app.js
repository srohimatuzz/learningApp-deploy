import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">My Learning App</div>
          <div className="space-x-4">
            <Link href="/signup" className="hover:underline">
              Sign Up
            </Link>
            <Link href="/login" className="hover:underline">
              Login
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            {/* Menambahkan link untuk halaman My Favorites */}
            <Link href="/myFavorites" className="hover:underline">
              My Favorites
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main
        className="container mx-auto py-6"
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;