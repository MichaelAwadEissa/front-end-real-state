import { useSelector } from "react-redux";
import Card from "../../components/card/cards";
import React from "react";

export default function FavoritesPage() {
  const favList = useSelector((store) => store.favList.favList);

  return (
    <>
      <div className="container row row-cols-3 gap-2">
        {favList.map((song, index) => (
          <React.Fragment key={index}>
            <Card {...song} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
