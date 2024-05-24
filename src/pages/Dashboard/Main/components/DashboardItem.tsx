interface DashboardItemProps {
  className?: string;
}

const DashboardItem = (props: DashboardItemProps) => {
  return (
    <div
      className={`${props.className} rounded-xl backdrop-blur-md border border-black/10 shadow-inner shadow-white/10`}
    ></div>
  );
};

export default DashboardItem;
