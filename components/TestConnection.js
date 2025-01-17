

const TestConnection = () => {
  const handleButtonClick = () => {
    window.location.href = '/login'; // Arahkan ke halaman courses.js
  };

  return (
    <div>
      <div></div>
      <button
        onClick={handleButtonClick}
        className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all duration-300"
      >
        Go to Courses
      </button>
    </div>
  );
};

export default TestConnection;
