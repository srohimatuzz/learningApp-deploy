

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavoriteAdded, setIsFavoriteAdded] = useState(false);

// // Fungsi untuk menambahkan kursus ke favorit di Supabase
// const handleAddFavoriteToSupabase = async (course) => {
//   try {
//     const { error } = await supabase
//       .from('favorites')
//       .insert([{ course_id: course.id, title: course.title }]);

//     if (error) {
//       console.error('Error adding favorite to Supabase:', error.message);
//     } else {
//       console.log(`Kursus "${course.title}" berhasil ditambahkan ke Supabase.`);
//     }
//   } catch (err) {
//     console.error('Unexpected error:', err);
//   }
// };


  // Fungsi untuk menambahkan ke favorit di Supabase
  const handleAddFavoriteToSupabase = async (course) => {
    try {
      const { data, error } = await supabase.from('myfavorites').insert([
        { course_id: course.id, title: course.title, description: course.description }
      ]);

      if (error) {
        console.error('Error adding favorite to Supabase:', error.message);
      } else {
        console.log('Course added to Supabase favorites:', data);
      }
    } catch (error) {
      console.error('Unexpected error adding favorite to Supabase:', error);
    }
  };

  // Fetch courses from the database
  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('courses').select('*');
    if (error) {
      console.error('Error fetching courses:', error.message);
    } else {
      const coursesWithContent = data.map((course) => {
        if (course.title === 'React for Beginners') {
          course.imageUrl = '../images/logoReact.png';
          course.videos = [
            {
              title: 'Advanced React Course',
              link: 'https://scrimba.com/advanced-react-c02h',
            },
            {
              title: 'Build a Movie Search App in React',
              link: 'https://scrimba.com/build-a-movie-search-app-in-react-c0u',
            },
            {
              title: 'Build Tic Tac Toe With React Hooks',
              link: 'https://scrimba.com/build-tic-tac-toe-with-react-hooks-c0m',
            },
          ];
        } else if (course.title === 'Advanced Node.js') {
          course.imageUrl = '/images/logoNodejs.png';
          course.videos = [
            {
              title: 'Introduction to Node.js',
              link: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
            },
            {
              title: 'Node.js documentation',
              link: 'https://nodejs.org/docs/latest/api/',
            },
            {
              title: 'NPM Crash Course',
              link: 'https://www.youtube.com/watch?v=jHDhaSSKmB0',
            },
            {
              title: 'How To Work with Files using the fs Module in Node.js',
              link: 'https://www.digitalocean.com/community/tutorials/how-to-work-with-files-using-the-fs-module-in-node-js',
            },
            {
              title: 'Restaurant Food App Node js Project',
              link: 'https://www.youtube.com/watch?v=3rjYFy_4EBI&list=PLuHGmgpyHfRwUUA1Bi8z07mxaWVuhpAgH',
            },
          ];
        } else if (course.title === 'CSS Mastery') {
          course.imageUrl = '/images/logoCss.jpg';
          course.videos = [
            {
              title: 'CSS Complete Course',
              link: 'https://youtu.be/n4R2E7O-Ngo',
            },
            {
              title: 'Learn By Building Apps Master CSS',
              link: 'https://www.youtube.com/watch?v=0hrJGWrCux0&pp=ygULY3NzIG1hc3Rlcnk%3D',
            },
            {
              title: 'HTML & CSS Full Course - Beginner to Pro',
              link: 'https://www.youtube.com/watch?v=G3e-cpL7ofc',
            },
          ];
        } else if (course.title === 'JavaScript') {
          course.imageUrl = '/images/logoJavascript.jpeg';
          course.videos = [
            {
              title: 'JavaScript Tutorial',
              link: 'https://www.w3schools.com/js/',
            },
            {
              title: 'JavaScript data types and data structures',
              link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures',
            },
            {
              title: 'JavaScript Crash Course For Beginners',
              link: 'https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s',
            },
            {
              title: 'Build a Netflix Landing Page Clone with HTML, CSS & JS',
              link: 'https://www.youtube.com/watch?v=P7t13SGytRk&t=22s',
            },
          ];
        } else if (course.title === 'Full Stack Development') {
          course.imageUrl = '/images/logoFullstack.png';
          course.videos = [
            {
              title: 'HTML Full Course - Build a Website Tutorial',
              link: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
            },
            {
              title: 'CSS Complete Course',
              link: 'https://youtu.be/n4R2E7O-Ngo',
            },
            {
              title: 'JavaScript Crash Course for Beginners',
              link: 'https://www.youtube.com/watch?v=hdI2bqOjy3c&t=2s',
            },
            {
              title: 'NPM tutorial for Beginners',
              link: 'https://www.youtube.com/watch?v=2V1UUhBJ62Y',
            },
            {
              title: 'Git and GitHub for Beginners',
              link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
            },
            {
              title: 'Tailwind CSS Full Course for Beginners',
              link: 'https://www.youtube.com/watch?v=lCxcTsOHrjo',
            },
            {
              title: 'React Course - Beginners Tutorial for React',
              link: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
            },
            {
              title: 'Node.js and Express.js Full Course',
              link: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
            },
          ];
        } else if (course.title === 'Introduction to Python') {
          course.imageUrl = '/images/logoPython.jpg';
          course.videos = [
            {
              title: 'HTML Full Course - Build a Website Tutorial',
              link: 'https://www.digitalocean.com/community/tutorials/how-to-write-your-first-python-3-program',
            },
            {
              title: 'Learn Python - Full Course',
              link: 'https://www.youtube.com/watch?v=4M87qBgpafk',
            },
            {
              title: 'Data Structures Illustrated',
              link: 'https://www.youtube.com/playlist?list=PLkZYeFmDuaN2-KUIv-mvbjfKszIGJ4FaY',
            },
            {
              title: 'W3Schools - Python Tutorial',
              link: 'https://www.w3schools.com/python',
            },
          ];
        } else if (course.title === 'Mastering Git & GitHub') {
          course.imageUrl = '/images/logoGit.jpg';
          course.videos = [
            {
              title: 'Getting Started - Installing Git',
              link: 'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git',
            },
            {
              title: 'Creating an account on GitHub',
              link: 'https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github',
            },
            {
              title: 'About repositories',
              link: 'https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories',
            },
            {
              title: 'Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 1)',
              link: 'https://www.youtube.com/watch?v=hrTQipWp6co&t=7s',
            },
            {
              title: 'Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 2)',
              link: 'https://www.youtube.com/watch?v=1ibmWyt8hfw',
            },
          ];
        } else {
          course.videos = [
            {
              title: 'Default Course Content',
              link: '#',
            },
          ];
        }
        return course;
      });
      setCourses(coursesWithContent);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();

    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // const handleAddToFavorites = async (course) => {
  //   if (!favorites.some((fav) => fav.id === course.id)) {
  //     const updatedFavorites = [...favorites, course];
  //     setFavorites(updatedFavorites);
  
  //     // Simpan ke Local Storage
  //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  
  //     // Simpan ke tabel `myfavorites` di Supabase
  //     try {
  //       const { data, error } = await supabase
  //         .from('myfavorites') // Nama tabel di Supabase
  //         .insert([{ 
  //           course_id: course.id, // Id kursus
  //           title: course.title, // Judul kursus
  //           description: course.description || '', // Deskripsi kursus (jika ada)
  //           created_at: new Date().toISOString(), // Tanggal dibuat
  //         }]);
  
  //       if (error) {
  //         console.error('Gagal menyimpan ke Supabase:', error.message);
  //       } else {
  //         console.log('Berhasil menambahkan ke Supabase:', data);
  //       }
  //     } catch (err) {
  //       console.error('Kesalahan tidak terduga saat menyimpan ke Supabase:', err);
  //     }
  
  //     // Tampilkan notifikasi
  //     setIsFavoriteAdded(true);
  //     setTimeout(() => setIsFavoriteAdded(false), 2000);
  //     console.log(`Menambahkan kursus "${course.title}" ke favorit.`);
  //   }
  // };
  

  const handleAddToFavorites = (course) => {
    if (!favorites.some((fav) => fav.id === course.id)) {
      const updatedFavorites = [...favorites, course];
      setFavorites(updatedFavorites);

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

      handleAddFavoriteToSupabase(course);

      setIsFavoriteAdded(true);
      setTimeout(() => setIsFavoriteAdded(false), 2000);
      console.log(`Menambahkan kursus "${course.title}" ke favorit.`);
    }
  };


  useEffect(() => {
    // Ambil kursus dari database dan simpan ke state
    const fetchCourses = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('courses').select('*');
      if (error) {
        console.error('Error fetching courses:', error.message);
      } else {
        setCourses(data);
      }
      setLoading(false);
    };

    fetchCourses();

    // Ambil favorit dari localStorage
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (

    <div className="min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-extrabold text-black mb-8">Daftar Kursus</h1>

      {loading ? (
        <div className="flex justify-center items-center space-x-4">
          <div className="animate-spin h-8 w-8 border-t-4 border-green-400 rounded-full"></div>
          <p className="text-lg text-gray-600">Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <p className="text-lg text-gray-600">Belum ada kursus tersedia.</p>
      ) : (
        <section className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden border-1 border-green-400 transform hover:scale-105 transition duration-300 max-w-xs mx-auto"
            >
              <div className="relative">
                <img
                  // src={course.imageUrl || '/default-course-image.jpg'}
                  src={`/images/${course.imageUrl}`}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-all duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-black mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            
              <div className="mt-4 flex justify-between items-center">
                  <button
                    className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all duration-300"
                    onClick={() => handleViewDetails(course)}
                  >
                    Lihat Detail
                  </button>
                  <button
  className="group relative flex items-center justify-center p-3 transition-all duration-300"
  onClick={() => handleAddToFavorites(course)}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-red-500 group-hover:fill-red-500 group-hover:text-white transition-all duration-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      className="transition-all duration-300 group-hover:fill-red-500"
    />
  </svg>
</button>
                </div>
              </div>
            </div>
            ))}
          </div>
        </section>
      )}

      {isFavoriteAdded && (
        <div className="absolute top-10 right-10 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
          Kursus telah ditambahkan ke favorit!
        </div>
      )}

      {isModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl">
            <h3 className="text-3xl font-semibold text-black mb-6">{selectedCourse.title}</h3>
            <p className="text-gray-600 mb-6">{selectedCourse.description}</p>

            <h4 className="text-2xl font-semibold text-black mb-4">Proses Pembelajaran</h4>
            <div className="text-gray-500">
              <ul className="space-y-4">
                {selectedCourse.videos.map((video, index) => (
                  <li
                    key={index}
                    className="border-2 p-4 rounded-lg shadow-md bg-white hover:bg-green-200 hover:text-black transition-all duration-300"
                  >
                    <a
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-black hover:underline flex items-center space-x-3"
                    >
                      <span className="bg-green-400 text-white p-2 rounded-full">{index + 1}</span>
                      <span>{video.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="bg-green-400 text-black px-6 py-3 rounded-lg hover:bg-green-500 transition-all duration-300"
                onClick={handleCloseModal}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;