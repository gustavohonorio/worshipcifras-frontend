import React from "react";
// components
import NavbarTop from "../components/navbar-top/NavbarTop";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import FilterTags from "../components/filter-tags/FilterTags";
import CardRectangleS from "../components/cards/CardRectangleS";
import CardRectangleM from "../components/cards/CardRectangleM";
import CarouselCardSquare from "../components/carousel/CarouselCardSquare";
import CircleImage from "../components/images/CircleImage";
import TitlePlus from "../components/texts/TitlePlus";
import Title from "../components/texts/Title";

const Home = () => {

    // filter tags data
    const filterTagsData = ["Cifra", "Letra", "Simplificada"];

    // carousel data
    const carouselData = [
        { imageSrc: "https://images.unsplash.com/photo-1571782605941-8c8fd0d43df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyN3x8d29yc2hpcHxlbnwxfHx8fDE3MDU2NzE1ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Hillsong . Quão lindo este nome é (Live)' },
        { imageSrc: "https://images.unsplash.com/photo-1591635514173-0149cfd7642f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1MXx8d29yc2hpcHxlbnwxfHx8fDE3MDU2NzMxNDl8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Taya Smith . Outro na fornalha' },
        { imageSrc: "https://images.unsplash.com/photo-1579975329590-63d9c57b2dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2N3x8d29yc2hpcHxlbnwxfHx8fDE3MDU2NzM1Mzh8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Nivea Soares . Grande é o Senhor' },
        { imageSrc: "https://images.unsplash.com/photo-1611513986631-0d1819a6ae07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyOHx8d29yc2hpcHxlbnwxfHx8fDE3MDU2NzE1ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Morada . Só tú és santo' },
      ];


    return (
        <div>
            {/* header */}
            <NavbarTop />

            {/* new releases */}
            <div style={{ display: 'flex', marginTop: '15px', marginLeft: '15px' }}>
                <div>
                    <CircleImage 
                        imageSrc="https://images.unsplash.com/photo-1517230878791-4d28214057c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxzaW5nZXJ8ZW58MXx8fHwxNzA1NjcwMjM2fDA&ixlib=rb-4.0.3&q=80&w=1080"
                    />
                </div>
                <div style={{ marginLeft: '15px' }}>
                    <TitlePlus 
                        Title="Grande é o Senhor"
                        Subtitle="Nivea Soares"
                    />
                </div>
            </div>
            <div>
                <div style={{ marginLeft: '15px', marginTop: '10px' }}>
                    <CardRectangleM 
                        imageSrc="https://images.unsplash.com/photo-1576919463908-de1f877114bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxN3x8d29yc2hpcHxlbnwxfHx8fDE3MDU2NzE1ODJ8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                        title="Godness of God (Live)"
                        subtitle="Album. Without Words: Genesis" 
                    />
                </div>
            </div>

            {/* filter tags */}
            <FilterTags tags={filterTagsData} />

            {/* best songs carousel */}
            <div>
                <div>
                    <Title 
                        Title="Músicas Christian & Gospel populares"
                    />
                </div>
                <CarouselCardSquare data={carouselData} />
            </div>
            <div style={{ marginBottom: '100px' }}></div>
            {/* bottom navigation */}
            <NavbarBottom />
        </div>
    );
};

export default Home;