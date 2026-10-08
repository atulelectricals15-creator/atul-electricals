import Icon from './Icon';
import { G } from '../lib/data';

export default function Guide() {
  return (
    <div className="guide">
      {G.map((g) => (
        <div className="gc" key={g[0]}>
          <Icon name="chk" />
          <h3>{g[0]}</h3>
          <p>{g[1]}</p>
          <div className="chips">{g[2].map((x) => <span key={x}>{x}</span>)}</div>
        </div>
      ))}
    </div>
  );
}
