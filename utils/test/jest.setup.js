// Add jest extension methods for jasmine
import 'jest-enzyme';

// Styled-Component setup
import 'jest-styled-components';

// Setup enzyme's react adapter
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
