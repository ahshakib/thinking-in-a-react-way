import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ahshakib")
  //       .then((result) => result.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className=" text-center bg-gray-600 text-white m-4 p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Github picture" width={300} />
    </div>
  );
}

export default Github;

export const gitInfo = async () => {
  const result = await fetch("https://api.github.com/users/ahshakib");
  return result.json();
};
