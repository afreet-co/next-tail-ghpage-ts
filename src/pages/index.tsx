const Index = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="shadow-2xl rounded-lg bg-gray-300 border-gray-500 border-2 w-72 p-4 space-y-4">
        <h1 className="text-xl font-bold text-center">
          Next.js - TailwindCSS - Github Pages - Typescript
        </h1>
        <p className="px-4 text-center">
          A project to be used as a starter for Next.js project which includes
          tailwind, it's configuration, typescript and also the github action
          workflow deployment to Github pages after pushing commit to the master
          branch.
        </p>
      </div>
    </div>
  );
};
export default Index;
