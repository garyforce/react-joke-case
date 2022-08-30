import styles from "./index.module.css";

interface IQuoteProps extends React.HTMLAttributes<HTMLElement> {
}

const Quote: React.FC<IQuoteProps> = ({ children }) => {
  return (
    <div className={styles.quote}>
      <div className={styles.quote_mark}></div>
      <div className={styles.text}>{children}</div>
    </div>
  );
};

export default Quote;
