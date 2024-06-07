import {React,useRef} from 'react'
import {  useInView } from "framer-motion"

const PicAnimation = (children) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });
      
        return (
          <section ref={ref}>
            <div className='projimg my-10 rounded-md'
              style={{
                transform: isInView ? "none" : "translateX(20px) translateY(20px)",
                boxShadow: isInView ? "15px 15px 0px #25221e, 15px 15px 0 7px #f25b34" : 'none',
                transition: "all 1s"
              }}
            >
              {children}
            </div>
          </section>
        );
}

export default PicAnimation
