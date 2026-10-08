import { I } from '../lib/data';

export default function Icon({ name }) {
  return <svg className="ic" viewBox="0 0 48 48" aria-hidden="true" dangerouslySetInnerHTML={{ __html: I[name] }} />;
}
