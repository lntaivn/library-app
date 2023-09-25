import { Carousel } from "./Components/Carousel";
import { ExploreTopBook } from "./Components/ExploreTopBook";
import { Heros } from "./Components/Heros";
import { LibraryServices } from "./Components/LibraryServices";

export const HomePage = () => {
    return (
        <>
            <ExploreTopBook />
            <Carousel />
            <Heros />
            <Heros />
            <LibraryServices />
        </>
    );
};
