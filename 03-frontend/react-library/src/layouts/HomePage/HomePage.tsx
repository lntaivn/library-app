import { Carousel } from "./Components/Carousel";
import { ExploreTopBook } from "./Components/ExploreTopBook";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";
import "./HomePage.css";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBook />
            <Carousel />
            <Heros />
            <LibraryServices />
        </>
    );
};
