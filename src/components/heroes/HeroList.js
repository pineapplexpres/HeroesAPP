import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublished";
import { HeroCard } from "./HeroCard";
import './styles/HeroList.css'
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])
  
  return (
    <div className="gridCards animate__animated animate__fadeIn">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
