import TestConnection from '../components/TestConnection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex flex-col items-center justify-center text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold drop-shadow-lg">
          Welcome to Imalearn
        </h1>
        <p className="text-lg text-gray-200">
          Explore and connect with modern learning tools!
        </p>
      </div>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg text-gray-800">
        <TestConnection />
      </div>
    </div>
  );
};

export default Home;
