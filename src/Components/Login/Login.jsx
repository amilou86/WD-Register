import React from 'react'
import { motion } from 'framer-motion'

const blockVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 1 },
    }
}

const Login = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <motion.div className="flex-1 items-centre justify-centre bg-blue-300"
                variants={blockVariants}
                initial="hidden"
                animate="show">
            </motion.div>

            <motion.div className="flex-1 items-centre justify-centre bg-yellow-300"
                variants={blockVariants}
                initial="hidden"
                animate="show">

            </motion.div>

        </div>
    )
}

export default Login