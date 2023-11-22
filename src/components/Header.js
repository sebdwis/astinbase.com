import "./Header.css";

const headerList = [
  `An exploration of movement within from within - especially the act of sharing it.
  A collection of infinite reassurances irrationally tempered with doubt and conceit. 
  Hopefully disconnected from what it represents. Hopefully celebrated and enjoyed, 
  but comfortable in obscurity and scrutiny.`,
  `The prolonging of the inevitable, as well as basking in its approach. Peering
  under the surface of what is familiar and amplifying it. Encoding severity in a
  language deemed universal and begrudgingly announcing resulting parables over 
  algorithmically weathered channels.`,
  `A hopefully ephemeral reflection and a projection, shared by seeming opposites.
  Anticipation of their synchronicity, affirming capricious beliefs into unwanted 
  loyalty.`,
  `A state endlessly devoted to curtains and covers. Programmed and determined to 
  dissolve by day three. It tries to ensure foresight never dances again - 
  especially if the result is quietly subsumed into the congealing passive, teeming 
  with strikes and scribbles.`,
  `An artificially fuelled system, one that adapts to various sources suddenly and 
  vivaciously. Subtle signs of distress appear rapidly upon stasis, of which the 
  inertia to can produce unexpected manifestations of understanding and revelation.`,
  `Pretentious sonic poetry aimed at invigorating a purportedly disconnected society. 
  The hope of encountering mirrors on the opposite end to bridge gaps, justifying 
  insidious forays into the past and discovery of its rigidness. In its maturity, it 
  is self-awareness to the degree of lacking it.`
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
