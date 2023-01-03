import "./Header.css";

const headerList = [
  `An exploration of movement within from within - especially the act of sharing it. 
  A vulnerable collection of infinite reassurances irrationally tempered with doubt 
  and conceit. Hopefully disconnected from what it represents.
  Hopefully celebrated and enjoyed, but comfortable in obscurity and scrutiny.`,
  `The prolonging of the inevitable, as well as basking in its approach. Peering
  under the surface of what is familiar and amplifying it. Encoding severity in a
  language universal. Begrudgingly announcing these parables over algorithmically
  weathered channels.`,
  `A boy, rotating in a quiet field, innately cracked, and folded clean a million
  times. His need to hold on and his longing for silver hours. A hopefully ephemeral
  reflection and a projection, shared by seeming opposites - perhaps not just by a boy.`,
  `Endlessly devoted to curtains and bed sheets. Programmed and determined to bore
  by day three. It even made sure that foresight was sworn to never dance again.`,
  `Sitting close on electric mobile homes,
  it being a distance felt too far. The loneliest of creatures stuffed inside a
  red box car. A weary speaker box making osmosis, for weary travelers off to focus -
  somehow relieved to be shuffling once more.`,
  `The act of digging a hole in the ground, and filling it with whatever you want.
  If you're rich you fill it in with gold, if you're poor you kick the dirt back in.`,
];

const headerIdx = Math.floor(Math.random() * headerList.length);

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <span className="astin-base">astin base</span>
        <span className="noun"> (n.)</span>
      </div>
      <div className="definition">/ˈæstən beɪs/ · {headerList[headerIdx]}</div>
    </div>
  );
};

export default Header;
