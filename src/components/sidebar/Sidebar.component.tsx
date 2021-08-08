import React from "react";
import { fetchMeteo } from "../../hooks/meteo/fetchMeteo";
import Pages from "components/pages";
import Image from "components/image";
import Placeholder from "components/placeholder";
import styles from "./Sidebar.module.scss";
import useSWR from "swr";
import { executeGet } from "utils/request";
const {
  sidebar,
  sidebarProfile,
  sidebarProfileImage,
  sidebarProfileName,
  sidebarProfileBio,
  sidebarPages,
  sidebarPagesList,
  sidebarPagesActive,
} = styles;

export default function Sidebar(): JSX.Element {
  const { data, error } = useSWR("/api/meteo", executeGet);
  console.log(data);
  return (
    <aside className={sidebar}>
      <div className={sidebarProfile}>
        <Image
          src={
            data &&
            `https://openweathermap.org/img/wn/${data.resa.current.weather[0].icon}@2x.png`
          }
          alt={data && data.resa.current.weather[0].description}
          className={sidebarProfileImage}
        />
        <h2 className={sidebarProfileName}>
          <Placeholder content={data && data.resa.timezone} length="short" />
        </h2>
        <p className={sidebarProfileBio}>
          <Placeholder
            content={data && data.resa.current.feels_like + "°C"}
            length="medium"
          />
        </p>
      </div>
      <div className={sidebarPages}>
        <ul>
          <li>
            Vento: &nbsp;
            <Placeholder
              content={data && data.resa.current.wind_speed + "km"}
              length="medium"
            />
          </li>
        </ul>
      </div>
    </aside>
  );
}
