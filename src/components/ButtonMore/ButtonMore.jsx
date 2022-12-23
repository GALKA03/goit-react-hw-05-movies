import styles from 'components/ButtonMore/ButtonMore.module.css'
export const ButtonMore = ({ onLoadMore }) => {
  return (
//  Math.ceil(images.totalHits / images.perPage) <= pageNumber
        <button onClick={onLoadMore}
      className={styles.button}
      
    >
      <p>NEXT</p>
    </button> 
)}