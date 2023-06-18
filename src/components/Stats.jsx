import styles from "../style";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const stats = [
    { id: 1, title: 'User-Active', value: 3800 },
    { id: 2, title: 'Trusted By Company', value: 230 },
    { id: 3, title: 'Transaction', value: 230 },
  ];

  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
      ref={ref}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-poppins font-semibold xs:text-[40 px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    delay={0}
                    formattingFn={(value) => {
                      return stat.id === stats[stats.length - 1].id ? `$${value}M+` : `${value}+`;
                    }}
                  />
                ) : (
                  stat.value
                )}
            </h4>

          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </motion.div>
      ))}
    </section>
  );
};
export default Stats;