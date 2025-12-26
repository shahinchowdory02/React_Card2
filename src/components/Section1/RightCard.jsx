import img1 from "../../assets/img1.jpg";
import { FaArrowRight } from "react-icons/fa6";

const RightCard = () => {
  return (
    <div className="h-[620px] overflow-hidden relative w-[360px] rounded-4xl">
      <img
        src={img1}
        alt="Section Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className="bg-white text-2xl font-semibold rounded-full h-14 w-14 flex justify-center items-center">
          1
        </h2>
        <div>
          <p
            className="text-xl leading-relaxed text-white font-medium mb-10
                  "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
            quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id, ipsum?
            <div className="flex items-center gap-2 mt-10">
              <button className="bg-blue-600 text-white font-semibold rounded-full px-7 py-2">
                Satisfied
              </button>
              <button className="bg-blue-600 text-white font-semibold rounded-full px-3 py-2">
                <i>
                  <FaArrowRight />
                </i>
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
