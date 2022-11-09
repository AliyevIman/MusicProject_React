import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Gallery, Item } from 'react-photoswipe-gallery';
import { BASE_URL } from '../../api/BaseConfig';
import AddIcon from '@mui/icons-material/Add';

import "../../pages/Home.scss";
import 'photoswipe/style.css';
import "bootstrap/dist/css/bootstrap.min.css"
import PhotoSwipeLightbox from 'photoswipe/lightbox';
// import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin'
const ImageGallery = () => {
    const [musicMusician, setMusicMusician] = useState([]);

    const getMusicMusician = () => {
        fetch(`${BASE_URL}api/Musician/GetAll`)
            .then((c) => c.json())
            .then((s) => setMusicMusician(s));
    };
    useEffect(() => {
        getMusicMusician();
    }, []);
    const uiElements = [
        // add custom UI element
        {
            name: 'custom-button',
            ariaLabel: 'Custom button',
            order: 9,
            isButton: true,
            html: {
                isCustomSVG: true,
                inner:
                    '<path d="<ICON_PATH>" id="pswp__icn-cstm-btn"/>',
                outlineID: 'pswp__icn-cstm-btn',
            },
            appendTo: 'bar',
            onInit: (el, pswpInstance) => {
                // do something on UI element's init event
            },
            onClick: (e, el, pswpInstance) => {
                // do something on UI element's click event
            },
        },

        // add another custom UI element
        // ...
    ]
    return (
        <Gallery
        // uiElements={uiElements}
        >
            <div className="row m-0">
                {/* style={{ position: "relative", height: "615.609px" }} */}


                {
                    musicMusician &&
                    musicMusician.map(c => (
                        c.isNew===true&&
                        // style={{ position: "absolute", left: "0px", top: "205px" }}
                        <div className='col-lg-6 col-md-6 col-sm-6 mb-5' >
                            <div className='gallery-col overlay2 '>


                                <Item
                                    original={c.photo}
                                    thumbnail={c.photo}
                                    width="1024"
                                    height="768"
                                >
                                    {({ ref, open }) => (
                                        <>
                                          <img src={c.photo} />
                                        <div className="plus"ref={ref} onClick={open}  >
                                        <div className="plus-icon" >
                                            <AddIcon />
                                        </div>
                                    </div>
                                        </>
                                      
                                    )}
                                 
                                </Item>
                            </div>

                        </div>
                    ))
                }
            </div>

            {/* <Item
        original="https://placekitten.com/1024/768?image=2"
        thumbnail="https://placekitten.com/80/60?image=2"
        width="1024"
        height="768"
      >
        {({ ref, open }) => (
          <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
        )}
      </Item> */}
        </Gallery>
    )
}

export default ImageGallery