import renderer from 'react-test-renderer';
import GitHubCard from './component/GitHubCard';

test('renders a snapshot', () => {
    const tree = renderer.create(<GitHubCard />).toJSON();
    expect(tree).toMatchSnapshot();
});
