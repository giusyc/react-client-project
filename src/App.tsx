// src/App.tsx
import UserDisplay from "./components/UserDisplay";
import { GetUsersDocument } from "./graphql/generated";
import { useQuery } from "urql";

function App() {
  const [results] = useQuery({
    query: GetUsersDocument,
  });

  const { data, fetching, error } = results;

  if (fetching) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
      {data?.users?.map(
        (user, i: number) => user && <UserDisplay user={user} key={i} />,
      )}
    </div>
  );
}

export default App;
