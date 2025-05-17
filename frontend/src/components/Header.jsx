import { motion } from 'framer-motion';

export default function Header({ children }) {
  return (
    <motion.header
      className="bg-gradient-to-r from-blue-800 to-blue-600 p-4 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">AI News Agent</h1>
        {children}
      </div>
    </motion.header>
  );
}