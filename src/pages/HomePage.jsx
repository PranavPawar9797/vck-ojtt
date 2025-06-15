import Header from "../components/Header/Header";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-400 to-blue-400 min-h-screen p-4">
      <Header />
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
        <img
          src="/images/vivekanand-banner.jpg"
          alt="Vivekanand College Banner"
          className="rounded-md w-full h-auto"
        />

        <h1 className="text-4xl font-bold text-center mt-4">
          Welcome to Vivekanand College!
        </h1>
        <p className="text-center text-lg mt-2">
          Your journey to excellence starts here.
        </p>
      </div>
    </div>
  );
};

export default HomePage;