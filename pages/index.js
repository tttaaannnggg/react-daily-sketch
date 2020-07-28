import Head from "next/head";
import Link from "next/link";
import { sketchList } from "./sketches/sketchList";

export default function Home() {
  return (
    <div>
      <p>This is a page for my daily frontend sketches.</p>
      <NavigationList items={sketchList} />
    </div>
  );
}

const NavigationList = props => {
  const { items } = props;
  return (
    <div>
      {items.map((item, i) => {
        return (
          <div>
            <Link href={"/sketches/" + item}>
              <a>{i + " - " + item}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
