import { StickyWrapper } from "./components/sticky-wrapper";
import Layout from "./layout";

export function App() {
  return (
    <Layout>
      <div className="flex flex-row gap-12">
        <StickyWrapper color="red" />
        <StickyWrapper color="blue" />
      </div>
    </Layout>
  );
}

export default App;
