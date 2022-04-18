import Hero from './components/Hero/Hero.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import List from './components/List/List.js';
import TextInput from './components/TextInput.js';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
      <TextInput />
    </div>
  );
};

export default App;
