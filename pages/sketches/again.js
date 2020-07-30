import styles from "./again.module.css";
export default function (props) {
  return (
    <div>
      <div className={styles.bgtext}>
        <p>
          We went over databases and got through our basic CRUD operations in
          SQL. I got them set up with an ElephantSQL database and PSQL, so that
          they could start dealing with DBs.{" "}
        </p>
        <p>
          {" "}
          They asked me a bunch of stuff about who owns what, and what the
          relationships are between the software, the providers that host them,
          and the SaaS solutions that provide access, and asked me a bit about
          real time databases as well, which I didn't know much about.
        </p>
        <p>
          {" "}
          I'm not sure about RTDBs writ large, but I'll try to at least
          summarize what the deal is with firebase's realtime DB.{" "}
        </p>
        <p>
          it seems like... a clientside solution? but one that live-broadcasts
          changes as events to other connected devices. Google describes
          firebase as being something like a JSON tree.
        </p>
        <p>
          reading the{" "}
          <a href="https://en.wikipedia.org/wiki/Real-time_database">
            wikipedia article
          </a>
          , it seems a little bit clearer that an RTDB is a database that works
          within time constraints, using timestamps and other strategies for
          prioritizing critical data and ingest it, making it possible to
          resolve queries quickly, with up-to-date information.
        </p>
        <p>
          it seems to me that the primary difference is that RTDBs maintain
          consistency by returning temporarily valid data- giving a range within
          which it the data is accurate, plus prioritizing data ingestion, such
          that data that is key to consistency gets processed first
        </p>
      </div>
      <div className={styles.container}>
        {new Array(16).fill(null).map(() => (
          <div className={styles.buttonContainer}>
            <button className={styles.floatingButtons}>
              i helped xin with stuff for their residency again today
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
