import { ResetCSS } from './global/resetCSS';
import { Layout, Profile, Repositories} from './components';
import { GithubProvider } from './context/github';

const App = () => {
  return (
    <main>
      <GithubProvider >
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
