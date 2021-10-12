import { useAppContext } from "../contexts/AppContext";

const Index = () => {
  const { content, title } = useAppContext();
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="shadow-2xl rounded-lg bg-gray-300 border-gray-500 border-2 w-72 p-4 space-y-4">
        <h1 className="text-xl font-bold text-center">{title}</h1>
        <p className="px-4 text-center">{content}</p>
      </div>
    </div>
  );
};
export default Index;
