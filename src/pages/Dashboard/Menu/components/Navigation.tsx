import { Link } from "react-router-dom";

interface NavigationProps {
  list: { title: string; url: string }[];
}

const Navigation = (props: NavigationProps) => {
  const navList = props.list.map((element, index) => (
    <li
      key={index}
      className="cursor-pointer text-[#272744] hover:text-[#494d7e] text-center p-2"
    >
      <Link to={element.url}>{element.title}</Link>
    </li>
  ));
  return (
    <div>
      <ul>{navList}</ul>
    </div>
  );
};

export default Navigation;
