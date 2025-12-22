import RightContent from "../Section1/LeftContent";
import LeftContent from "../Section1/RightContent";

const Page1Content = () => {
  return (
    <div className="py-3 flex gap-10 items-center h-[90vh] px-8 ">
      <RightContent />
      <LeftContent />
    </div>
  );
};

export default Page1Content;
