import React from 'react';
import { Link } from 'react-router-dom';
import ProgressiveImage from 'react-progressive-image';
import { motion } from 'framer-motion';

const transition = {
    duration: 0.6,
    ease: [0.43, 0.13, 0.23, 0.96],
};

const Home = ({ imageDetails, image }) => (
    <>
        <main>
            <motion.div
                // exit={{ opacity: 0 }}
                transition={transition}
                className='container'
            >
                <div className='row center'>
                    <div className='image-container'>
                        <div
                            className='thumbnail'
                            ref={image}
                            style={{
                                width: imageDetails.width,
                                height: imageDetails.height,
                            }}
                        >
                            <div className='frame'>
                                <Link to={`/model/yasmeen-tariq`}>
                                    {/* This image first loads a lower resolution image (compressed) and once the higher quality image finishes loading it is displayed on the page in order to place image on screen faster */}
                                    <ProgressiveImage
                                        src={require('../images/yasmeen.webp')}
                                        placeholder={require('../images/compressed-image.jpg')}
                                    >
                                        {src => (
                                            <motion.img
                                                whileHover={{ scale: 1.1 }}
                                                transition={transition}
                                                src={src}
                                                alt='Yasmeen Tariq'
                                            />
                                        )}
                                    </ProgressiveImage>
                                </Link>
                            </div>
                        </div>
                        <motion.div
                            exit={{ opacity: 0 }}
                            transition={transition}
                            className='information'
                        >
                            <div className='title'>Yasmeen Tariq</div>
                            <div className='location'>
                                <span>28.538336</span>
                                <span>-81.379234</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </main>
    </>
);

export default Home;
