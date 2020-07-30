import styles from "./vision.module.css";
export default function (props) {
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <p>
          My <Blur>eyes</Blur> feel like they're going to melt out of my face. I{" "}
          <Blur>saw</Blur> a black trans lives matter tweet blown up to the size
          of a billboard and I'm not sure what to make of it. I can't focus my
          <Blur> eyes</Blur> enough to read all of the text.
        </p>
      </div>
    </div>
  );
}

const Blur = props => {
  return <span className={styles.see}>{props.children}</span>;
};
