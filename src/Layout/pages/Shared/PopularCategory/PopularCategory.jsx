import SectionHeader from "../../../../components/SectionHeader/SectionHeader";
import ManuItem from "../ManuItem/ManuItem";
import useMenu from "../../../../hooks/useMenu";

const PopularCategory = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <div>
      <SectionHeader
        heading={"From Out Menu"}
        subHeading={"Popular item"}
      ></SectionHeader>

      <div className="grid grid-cols-1 my-10 md:grid-cols-2 gap-5">
        {popular.map((item) => (
          <ManuItem key={item._id} item={item}></ManuItem>
        ))}
      </div>
    </div>
  );
};

export default PopularCategory;
