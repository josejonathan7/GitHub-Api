import { Layout } from './components/layout';


const App = () => {
  return (
    <main>
      <Layout>
        <div>
            <img src="https://avatars.githubusercontent.com/u/71531287?v=4" alt="Avatar of user" />
            <h1>José Jonathan</h1>
            <h3>userName: </h3>
            <span>josejonathan7</span>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
        </div>
        <div>Repo</div>
        <div>Started</div>
      </Layout>
    </main>
  );
}

export default App;
