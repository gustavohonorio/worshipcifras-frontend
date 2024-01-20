import React from "react";
import NavbarTop from "../components/navbar-top/NavbarTop";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import FilterTags from "../components/filter-tags/FilterTags";
import CardRectangleSmall from "../components/cards/CardRectangleSmall";

const Home = () => {
    return (
        <div>
            <NavbarTop />
            <FilterTags />
            <div>
                <div style={{ display: 'flex' }}>
                    <CardRectangleSmall imageSrc="https://images.unsplash.com/photo-1608319917470-9d9179430f8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw5fHxTaW5nZXJ8ZW58MXx8fHwxNzA1NjcyMTYzfDA&ixlib=rb-4.0.3&q=80&w=1080" text="Gabriela Rocha" />
                    <CardRectangleSmall imageSrc="https://images.unsplash.com/photo-1564247699380-95345741e374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxOHx8SGlsbHNvbmd8ZW58MXx8fHwxNzA1NjcyMTAzfDA&ixlib=rb-4.0.3&q=80&w=1080" text="Hillsong Worship" />
                </div>
                <div style={{ display: 'flex' }}>
                    <CardRectangleSmall imageSrc="https://images.unsplash.com/photo-1543148845-4b19c48482fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxOXx8U2luZ2Vyc3xlbnwxfHx8fDE3MDU2NzIxOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" text="Tasha Cobbs" />
                    <CardRectangleSmall imageSrc="https://images.unsplash.com/photo-1548795835-264877304664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxDaG9pcnxlbnwxfHx8fDE3MDU2NzIyNjV8MA&ixlib=rb-4.0.3&q=80&w=1080" text="Maverick Music" />
                </div>
            </div>


            <NavbarBottom />
        </div>
    );
};

export default Home;