import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 shadow-lg p-4 h-auto">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
