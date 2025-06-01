import CarScene from "./components/CarScene";
import F1logo from "/images/logo.png";
import Ferrarilogo from "/images/Ferrari.png";
function App() {
  return (
    <>
      <div>
        <div className="container">
          <div className="background-ui bg-black"></div>
          <CarScene></CarScene>
          <div className="overlay">
            <div className="navmenu flex_container gap-4">
              <div className="logocard flex_container w-[10vh] rounded-[40px]">
                <img className="w-[70%]" src={F1logo} alt="" />
              </div>
              <div className="flex_container card rounded-[40px]">
                <div className="navmenuchoice navmenuchoice_active">
                  Circuit
                </div>
                <div className="navmenuchoice">Engine</div>
                <div className="navmenuchoice navmenuchoice_active">Engine</div>
                <div className="navmenuchoice">Engine</div>
              </div>
            </div>
            <div className="left_cards_holder">
              <div className="contentCards_square flex_container rounded-[20px]  gap-4">
                <div className="constructorcard flex_container w-[10vw] h-[10vw] rounded-full">
                  <img className="w-[50%]" src={Ferrarilogo} alt="" />
                </div>
                <div className="w-[40%]">
                  <h1 className="text-xl font-bold">Ferrari</h1>
                  <p className="text-[8px] text-justify">
                    Scuderia Ferrari is the racing team division of the Ferrari
                    automobile company.
                  </p>
                </div>
              </div>
              <div className="flex_container gap-2">
                <div className="contentCards_square rounded-[40px]">
                  <h1 className="text-1xl font-bold">Circuit</h1>
                  <p className="text-sm">
                    Circuit information and details will be displayed here.
                  </p>
                </div>
                <div className="contentCards_square rounded-[40px]">
                  <h1 className="text-1xl font-bold">Engine</h1>
                  <p className="text-sm">
                    Engine specifications and performance data will be displayed
                    here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
