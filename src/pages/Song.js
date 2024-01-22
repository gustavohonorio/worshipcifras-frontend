import React from "react";
// components
import NavbarTop from "../components/navbar-top/NavbarTop";
import NavbarBottom from "../components/navbar-bottom/NavbarBottom";
import FilterTags from "../components/filter-tags/FilterTags";
import CardRectangleM from "../components/cards/CardRectangleM";
import CarouselCardSquare from "../components/carousel/CarouselCardSquare";
import CircleImage from "../components/images/CircleImage";
import TitlePlus from "../components/texts/TitlePlus";
import Title from "../components/texts/Title";
import Chords from "../components/texts/Chords";
import YoutubePlayer from "../components/videos/YoutubePlayer";
import CarouselCardCircle from "../components/carousel/CarouselCardCircle";

const Home = () => {

    // filter tags data
    const filterTagsData = ["Cifra", "Letra", "Simplificada"];

    // carousel data
    const carouselMusicRelatedData = [
        { imageSrc: "https://images.unsplash.com/photo-1461088945293-0c17689e48ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyMXx8UGVvcGxlfGVufDF8fHx8MTcwNTY0MTE5M3ww&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Hillsong . Quão lindo este nome é (Live)' },
        { imageSrc: "https://images.unsplash.com/photo-1568849676085-51415703900f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw5fHxUcmF2ZWx8ZW58MXx8fHwxNzA1NjgzODMxfDA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Taya Smith . Outro na fornalha' },
        { imageSrc: "https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MXwxfHNlYXJjaHwxfHxOYXR1cmV8ZW58MXx8fHwxNzA1NjYzMDMzfDA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Nivea Soares . Grande é o Senhor' },
        { imageSrc: "https://images.unsplash.com/photo-1683009427619-a1a11b799e05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MXwxfHNlYXJjaHwxNXx8TmF0dXJlfGVufDF8fHx8MTcwNTY0MTE5M3ww&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Morada . Só tú és santo' },
      ];
    const carouselArtistRelatedData = [
        { imageSrc: "https://images.unsplash.com/photo-1513682121497-80211f36a7d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw2fHxwZW9wbGV8ZW58MXx8fHwxNzA1NjgwNzc0fDA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Hillsong Worship' },
        { imageSrc: "https://images.unsplash.com/photo-1627897495484-229b29feb0d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyfHxibGFjayUyMHBlb3BsZXxlbnwxfHx8fDE3MDU2ODA4MDl8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Maverick Music' },
        { imageSrc: "https://images.unsplash.com/photo-1606415918835-88d0614e75ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8YmxhY2slMjB3b21lbnxlbnwxfHx8fDE3MDU2ODA4MjZ8MA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Tasha Cobbs' },
        { imageSrc: "https://images.unsplash.com/flagged/photo-1567447720230-152baa2b2fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwyNHx8d29tYW4lMjBzaW5nZXJ8ZW58MXx8fHwxNzA1NjgwODUxfDA&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Nívea Soares' },
        { imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0MXx8YmxvbmQlMjBnaXJsfGVufDF8fHx8MTcwNTY4ODM2M3ww&ixlib=rb-4.0.3&q=80&w=1080", subtitle: 'Taya Smith' },
      ];

    // youtube video id
    const youtubeVideoId = 'pCWG_8xnuRA';


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
                        title="Grande é o Senhor"
                        subtitle="Album. Tudo se fez novo" 
                    ></CardRectangleM>
                </div>
            </div>

            {/* filter tags */}
            <FilterTags tags={filterTagsData} />

            {/* chords and lyrics */}
            <div>
                <Chords />
            </div>


            {/* videos do youtube */}
            <div>
                <div>
                    <Title 
                        Title="Videos"
                    />
                </div>
                <div>
                    <YoutubePlayer videoId={youtubeVideoId} />
                </div>
            </div>



            {/* best songs carousel */}
            <div>
                <div>
                    <Title 
                        Title="Encontre novas músicas Worship"
                    />
                </div>
                <CarouselCardSquare data={carouselMusicRelatedData} />
            </div>

            {/* related artists */}
            <div>
                <div>
                    <Title 
                        Title="Artistas relacionados"
                    />
                </div>
                <CarouselCardCircle data={carouselArtistRelatedData} />
            </div>




            <div style={{ marginBottom: '100px' }}></div>
            {/* bottom navigation */}
            <NavbarBottom />
        </div>
    );
};

export default Home;