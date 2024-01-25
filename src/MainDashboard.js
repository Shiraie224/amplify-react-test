import React, { useState, useEffect } from "react";
import footer_img from "./imgs/greeting_card.jpg";
import TitleBox from "./components/title_box1.svg";
import HamburgIcon from "./icons/hamburger_menu.svg";
import ClockIcon from "./icons/mi_clock.svg";
import UserIcon from "./icons/mi_user.svg";
import ArrowIcon from "./icons/p_arrow.svg";
import ArrowIcon_color from "./icons/p_arrow_color.svg";
import SunIcon from "./icons/typcn_weather-sunny.svg";
import CloudIcon from "./icons/typcn_weather-cloud.svg";
import RainIcon from "./icons/typcn_weather-rain.svg";
import MoonIcon from "./icons/typcn_weather-moon.svg";
import SnowIcon from "./icons/typcn_weather-snow.svg";
import BellIcon from "./icons/mdi_bell.svg";
import "./MainDashboard.css";

function MainDashboard() {
  // 現在時刻の更新
  const [currentDatetime, setCurrentDatetime] = useState(new Date()); // 初期値は現在時刻として設定
  // useEffectフックを使用して、1秒ごとに現在時刻を更新する処理を追加
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDatetime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer); // コンポーネントがアンマウントされた時にタイマーをクリアする
    };
  }, []);

  // 天気情報の取得
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch("http://localhost:5000/weather");
        const data = await response.json();
        setWeather(data.weather);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };
    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // 矢印アイコンを動かす
  const [currentArrow, setCurrentArrow] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArrow((prevArrow) => (prevArrow % 4) + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="MainDashboard">
      <div className="Background">
        <div className="Location">吉田発電所</div>
        <div className="HeaderArea"></div>
        <div className="CurrentstatusText">現在状況表示</div>
        <img src={HamburgIcon} className="MenuLoc" alt="" />
        <img src={ClockIcon} className="ClockLoc" alt="" />
        <img src={UserIcon} className="UserLoc" alt="" />
        <div className="NowDatetime">{currentDatetime.toLocaleString()}</div>
        <img src={footer_img} className="GreetingCard" alt="" />
        {weather === "SunIcon" && (
          <img src={SunIcon} className="WeatherLoc" alt="" />
        )}
        {weather === "CloudIcon" && (
          <img src={CloudIcon} className="WeatherLoc" alt="" />
        )}
        {weather === "RainIcon" && (
          <img src={RainIcon} className="WeatherLoc" alt="" />
        )}
        {weather === "SnowIcon" && (
          <img src={SnowIcon} className="WeatherLoc" alt="" />
        )}
        {weather === "MoonIcon" && (
          <img src={MoonIcon} className="WeatherLoc" alt="" />
        )}
        <img src={BellIcon} className="BellLoc" alt="" />
        <div className="LocItem"></div>
        <div className="LocLine"></div>
        {/* 受電電力ボード */}
        <div className="IncomeBoard">
          <div className="PowInSup">
            <img
              src={currentArrow === 1 ? ArrowIcon_color : ArrowIcon}
              className="PArrow1"
              alt=""
            />
            <img
              src={currentArrow === 2 ? ArrowIcon_color : ArrowIcon}
              className="PArrow2"
              alt=""
            />
            <img
              src={currentArrow === 3 ? ArrowIcon_color : ArrowIcon}
              className="PArrow3"
              alt=""
            />
            <img
              src={currentArrow === 4 ? ArrowIcon_color : ArrowIcon}
              className="PArrow4"
              alt=""
            />
          </div>
          <div className="Board1"></div>
          <img src={TitleBox} className="TitleBox1" alt="" />
          <div className="BoardTitleTxt1">受電電力</div>
          <div className="ResultPowVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              5,260&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div className="ResultPowTxt">実績</div>
          <div className="PredictedPowVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              5,917&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="PredictedPowTxt">予定</div>
        </div>
        {/* 太陽光発電ボード */}
        <div class="PvBoard">
          <div class="PowPvSup">
            <img
              src={currentArrow === 1 ? ArrowIcon_color : ArrowIcon}
              className="PArrow1"
              alt=""
            />
            <img
              src={currentArrow === 2 ? ArrowIcon_color : ArrowIcon}
              className="PArrow2"
              alt=""
            />
            <img
              src={currentArrow === 3 ? ArrowIcon_color : ArrowIcon}
              className="PArrow3"
              alt=""
            />
            <img
              src={currentArrow === 4 ? ArrowIcon_color : ArrowIcon}
              className="PArrow4"
              alt=""
            />
          </div>
          <div class="Board2"></div>
          <img src={TitleBox} className="TitleBox2" alt="" />
          <div class="BoardTitleTxt2">太陽光発電</div>
          <div className="PvIntensityVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              8.5&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW/m2
            </span>
          </div>
          <div class="PvIntensityTxt">日射強度</div>
          <div className="PvPowVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              280&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="PvPowTxt">発電中</div>
        </div>
        {/* 需要ボード */}
        <div class="DemandBoard">
          <div class="Board3"></div>
          <img src={TitleBox} className="TitleBox3" alt="" />
          <div class="BoardTitleTxt3">需要電力</div>
          <div className="TotalDemandVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              5,120&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="TotalDemandTxt">総需要</div>
          <div className="OthersDemandVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              493&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="OthersDemandTxt">その他</div>
          <div className="AirDemandVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              1,468&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="AirDemandTxt">空調</div>
          <div className="ProduceDemandVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              1,468&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="ProduceDemandTxt">生産</div>
        </div>

        {/* 蓄電池ボード */}
        <div class="BatteryBoard">
          <div class="Board4"></div>
          <img src={TitleBox} className="TitleBox4" alt="" />
          <div class="BoardTitleTxt4">NAS電池</div>
          <div class="PowNasSup">
            <img
              src={currentArrow === 1 ? ArrowIcon_color : ArrowIcon}
              className="PArrow1"
              alt=""
            />
            <img
              src={currentArrow === 2 ? ArrowIcon_color : ArrowIcon}
              className="PArrow2"
              alt=""
            />
            <img
              src={currentArrow === 3 ? ArrowIcon_color : ArrowIcon}
              className="PArrow3"
              alt=""
            />
            <img
              src={currentArrow === 4 ? ArrowIcon_color : ArrowIcon}
              className="PArrow4"
              alt=""
            />
          </div>
          <div className="BattryCapVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              1,080&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kWh
            </span>
          </div>
          <div className="BatterySoc">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              87&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              %
            </span>
          </div>
          <div class="BatteryCapTxt">残容量</div>
          <div className="BatteryChgdisVal">
            <span
              style={{
                color: "white",
                fontSize: 32,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              200&nbsp;
            </span>
            <span
              style={{
                color: "white",
                fontSize: 24,
                fontFamily: "Inter",
                fontWeight: 700,
                wordWrap: "break-word",
              }}
            >
              kW
            </span>
          </div>
          <div class="BatteryChgdisTxt">充電中</div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;
