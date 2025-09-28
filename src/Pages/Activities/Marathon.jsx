
import marathonImg from "../../assets/marathon.jpg";

const Marathon = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 mb-4">
        🚧 Under Construction
      </h1>
      <p className="text-lg opacity-70 mb-6 text-center">
        The Marathon page is coming soon! Stay tuned for my running events and achievements.
      </p>

      <img
        src={marathonImg}
        alt="Marathon"
        className="rounded-lg shadow-lg max-w-md w-full mb-6 animate-pulse"
      />

      <div className="animate-pulse text-blue-500 text-4xl">
        ⏳
      </div>
    </div>
  );
};

export default Marathon;
