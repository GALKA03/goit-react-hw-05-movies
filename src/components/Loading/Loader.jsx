import { Vortex } from  'react-loader-spinner'
import styles from '../Loading/Loader.module.css'
export const Loader = () => {
    
    return (
        <div className={styles.container} >
        <Vortex
  visible={true}
  height="200"
  width="200"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}