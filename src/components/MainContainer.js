import ButtonList from "./ButttonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 shadow-lg p-4 h-[90vh] border border-red-400">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
