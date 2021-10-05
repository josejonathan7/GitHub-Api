import { Layout } from './components/layout';
import { Profile } from './components/profile/Profile';

const App = () => {
  return (
    <main>
      <Layout>
        <Profile />
        <div>Repo</div>
        <div>Started</div>
      </Layout>
    </main>
  );
}

export default App;
