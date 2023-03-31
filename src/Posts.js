import { VscBug, VscCalendar, VscCloudUpload } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((err) => console.error(err));
      }}
    > <VscBug/> <VscCalendar/> <VscCloudUpload/> </button>
  );
};
