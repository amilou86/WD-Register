import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Virtual = () => {
    return (
        <div className="flex flex-col h-screen bg-grey-100">
            {/* Navbar */}
            <header className="bg-white p-4 shadow-md flex justify-between items-center">
                <h1 className="text-2xl font-bold">Virtual Appointments</h1>
                <Link to="/">
                    <button className="px-4 py-2 bg-white text-black border rounded shadow-md hover:bg-gray-200">
                        Back
                    </button>
                </Link>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-4 md:p-8 bg-slate-100">
                <ColorChangeCards />
            </main>
        </div>
    );
};

const ColorChangeCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
            <Card
                heading="September"
                bgColor="customPink"
            />
            <Card
                heading="October"
                bgColor="customBlue"
            />
            <Card
                heading="November"
                bgColor="customOrange"
            />
            <Card
                heading="December"
                bgColor="customPink"
            />
        </div>
    );
};

const Card = ({ heading, description, imgSrc }) => {
    return (
        <motion.div
            transition={{ staggerChildren: 0.035 }}
            whileHover="hover"
            className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
        >
            <div
                className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
                <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
                <div>
                    <h4>
                        {heading.split("").map((l, i) => (
                            <ShiftLetter letter={l} key={i} />
                        ))}
                    </h4>
                    <p>{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

const ShiftLetter = ({ letter }) => {
    return (
        <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
            <motion.span
                className="flex flex-col min-w-[4px]"
                variants={{
                    hover: { y: "-50%" },
                }}
                transition={{ duration: 0.5 }}
            >
                <span>{letter}</span>
                <span>{letter}</span>
            </motion.span>
        </div>
    );
};

export default Virtual;
