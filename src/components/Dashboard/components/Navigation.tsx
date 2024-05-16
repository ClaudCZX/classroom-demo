interface NavigationProps {
  list: string[];
}

const Navigation = (props: NavigationProps) => {
  const navList = props.list.map((l) => (
    <li className="text-center p-2">{l}</li>
  ));
  return (
    <div>
      <ul>{navList}</ul>
    </div>
  );
};

export default Navigation;
