import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const blockVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1 },
    },
};

const h2Variants = {
    initial: { y: 0 },
    clicked: { y: -100, scale: 0.5, transition: { duration: 0.5 } },
};

const newOptionsVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Login = () => {
    const [onboarderClicked, setOnboarderClicked] = useState(false);
    const [hostClicked, setHostClicked] = useState(false);

    const onboarderControls = useAnimation();
    const hostControls = useAnimation();

    const handleOnboarderClick = () => {
        setOnboarderClicked(true);
        onboarderControls.start('clicked');
    };

    const handleHostClick = () => {
        setHostClicked(true);
        hostControls.start('clicked');
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <motion.div
                className="flex-grow flex flex-col items-center justify-center bg-customPink"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                onClick={handleOnboarderClick}
            >
                <motion.h2
                    className="text-center border rounded-lg p-4"
                    variants={h2Variants}
                    initial="initial"
                    animate={onboarderControls}
                >
                    Onboarder
                </motion.h2>
                {onboarderClicked && (
                    <motion.div
                        className="mt-4 flex flex-col items-center"
                        variants={newOptionsVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <Link to="/virtual">
                            <button className="mb-2 px-4 py-2 bg-white text-black rounded cursor-pointer">Virtual</button>
                        </Link>
                        <Link to="/face-to-face">
                            <button className="px-4 py-2 bg-white text-black rounded">Face-to-Face</button>
                        </Link>

                    </motion.div>
                )}
            </motion.div>

            <motion.div
                className="flex-grow flex flex-col items-center justify-center bg-customBlue"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                onClick={handleHostClick}
            >
                <motion.h2
                    className="text-center border rounded-lg p-4"
                    variants={h2Variants}
                    initial="initial"
                    animate={hostControls}
                >
                    Facilitator
                </motion.h2>
                {hostClicked && (
                    <motion.div
                        className="mt-4 flex flex-col items-center"
                        variants={newOptionsVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <button className="mb-2 px-4 py-2 bg-#f72585 text-black rounded">Virtual</button>
                        <button className="px-4 py-2 bg-white text-black rounded">Face-to-Face</button>
                    </motion.div>
                )}
            </motion.div>

            <motion.div
                className="flex-grow flex flex-col items-center justify-center bg-customOrange"
                variants={blockVariants}
                initial="hidden"
                animate="show"
                onClick={handleHostClick}
            >
                <motion.h2
                    className="text-center border rounded-lg p-4"
                    variants={h2Variants}
                    initial="initial"
                    animate={hostControls}
                >
                    Admin
                </motion.h2>
                {hostClicked && (
                    <motion.div
                        className="mt-4 flex flex-col items-center"
                        variants={newOptionsVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <button className="mb-2 px-4 py-2 bg-orange text-black rounded">Virtual</button>
                        <button className="px-4 py-2 bg-white text-black rounded">Face-to-Face</button>
                    </motion.div>
                )}
            </motion.div>

        </div>
    );
};

export default Login;
