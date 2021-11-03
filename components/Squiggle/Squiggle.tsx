import type { FC } from "react";
import styles from "./styles.module.css";

export const Squiggle: FC = () => (
  <div className={styles.container}>
    <svg
      version="1.1"
      id="squiggle-svg"
      x="0px"
      y="0px"
      viewBox="0 0 461.2 206.4"
    >
      <defs>
        <clipPath id="squiggle-clip">
          <path
            d="M450.4,144.8c-5.8-0.8-11.7-1.7-17.5-2.4c-5.9-0.5-11.7-1.3-17.7-1.6c-5.9-0.3-11.8-0.8-17.8-0.7
		c-3,0-5.9-0.1-8.9,0l-8.9,0.3c-11.9,0.6-23.9,1.8-35.8,4c-5.8,1.1-11.6,2.4-17.4,4.1c0.8-5,1.8-10,3.1-14.8
		c1.3-5.2,3.1-10.3,5.1-15.2c1.9-5,4.4-9.5,7-14l0.4-0.7c1-1.8,1.6-3.9,1.5-6.1c-0.3-6.2-5.5-11.1-11.8-10.8
		c-6.2,0.3-12.3,0.3-18.5,0.8l-9.2,0.9c-1.5,0.2-3.1,0.3-4.6,0.5l-4.6,0.8l-9.1,1.5l-9,2.1l-4.5,1.1l-4.5,1.3c-3,0.9-6,1.7-8.9,2.8
		c-11.8,4-23.1,9.2-34,15.3c-0.9,0.5-1.8,1-2.7,1.5c3.2-10.4,6.5-20.7,10.3-30.8c3.8-10.1,7.7-20.1,12.3-29.5
		c4.5-9.4,9.5-18.5,15.1-26.3l0,0l1.1-2c1.4-2.5,2.1-5.4,1.9-8.4c-0.5-8.7-7.9-15.5-16.6-15C232,4,218,5.6,204.5,9
		c-13.5,3.4-26.7,7.8-39.2,13.7c-12.4,5.8-24.4,12.5-35.6,20.2c-11.2,7.7-21.7,16.1-31.7,25C78.2,85.9,60.7,106,45.3,127.4
		c-7.7,10.7-14.9,21.7-21.6,33c-6.7,11.3-13,22.7-18.6,34.9c-1.2,2.6-0.2,5.8,2.4,7.2c2.7,1.5,6.1,0.5,7.5-2.2l0.1-0.2
		c6-10.9,13-21.8,20.2-32.3c7.3-10.5,15-20.6,23.1-30.4c16.2-19.5,34.2-37.4,53.8-52.9c9.8-7.7,20.1-14.7,30.7-21
		c10.6-6.2,21.7-11.4,33-15.8c11.3-4.4,23-7.3,34.7-9.5c2.8-0.5,5.7-0.9,8.6-1.2c-0.8,2-1.6,4-2.4,6c-4.3,10.9-7.7,21.8-10.9,32.8
		c-3.2,11-5.9,22-8.4,33c-2.5,11.1-4.7,22-6.6,33.4l-0.1,0.7c-0.6,3.7,0.7,7.7,3.7,10.3c4.7,4.2,12,3.8,16.2-0.9l0,0l1.1-1.1
		c0.4-0.4,0.9-0.8,1.4-1.3c0.9-0.9,2-1.7,3-2.5c2-1.7,4.2-3.3,6.4-4.9c2.2-1.5,4.4-3.1,6.8-4.6c2.3-1.5,4.6-2.9,7-4.2
		c9.5-5.4,19.6-10,30-13.5c2.6-0.9,5.3-1.6,7.9-2.5l4-1.2l4-1l8.1-1.9l8.2-1.4l4.1-0.7c1.4-0.2,2.8-0.3,4.1-0.4l5.9-0.6
		c-2.2,5.6-4.1,11.2-5.6,16.9c-1.6,6.1-2.9,12.3-3.8,18.5c-0.4,3.1-0.8,6.2-1.1,9.4c-0.1,1.6-0.3,3.1-0.4,4.7
		c-0.1,1.6-0.2,3.1-0.2,5.1c0,1.7,0.3,3.5,1.1,5.1c2.7,5.7,9.6,8.1,15.3,5.4l0.7-0.3l0,0c0.5-0.3,1.9-1,2.9-1.5
		c1.1-0.6,2.4-1.1,3.5-1.6c2.4-1,4.9-2.1,7.4-2.9c5.1-1.9,10.3-3.4,15.6-4.8c10.7-2.8,21.7-4.7,32.8-6l8.4-0.9
		c2.8-0.3,5.6-0.4,8.4-0.5c5.6-0.4,11.3-0.4,16.9-0.5c5.7-0.1,11.3,0.2,17,0.3l17,1.2l0.3,0c3.5,0.2,6.6-2.3,7.1-5.7
		C456.6,148.7,454.1,145.3,450.4,144.8z"
          />
        </clipPath>
      </defs>
      <path
        id="squiggle-path"
        d="M7.7,202.6c0,0,94-182,233-182c-25,66-46,133-46,133s47-58,142-58c-23,37-30.2,79.3-30.2,79.3
	s41.2-39.3,149.2-22.3"
      />
    </svg>
  </div>
);
