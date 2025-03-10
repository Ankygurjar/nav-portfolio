import React from "react";
import { motion } from "framer-motion";

import styles from "./style";
import {
  Navbar,
  Hero,
  Education,
  SkillsAndExperience,
  ExtraCurricular,
  Footer,
  OpenSource,
  Projects,
  BlogPosts,
  Loading,
  Achievements,
} from "./components";

const App = () => {
  const [isLoading,setIsLoading] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>{setIsLoading(false)},0);
  },[])

  if(isLoading){
    return (
      <div className="bg-primary w-full overflow-hidden">
        <Loading/>
      </div>
    )
  }else{
    return (
      // A div to wrap the entire application
    <div className="bg-primary w-full overflow-hidden">
      <motion.section
        initial={{ x: -100, opacity: 0.25 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <SkillsAndExperience />
            <Education />
          </div>
        </div>
        <Achievements />
        <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <BlogPosts enabled={false} />
            <OpenSource />
            <ExtraCurricular />
          </div>
        </div>
        <Footer />
      </motion.section>
    </div>

    );
  }
};

export default App;
