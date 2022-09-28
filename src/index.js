import _ from 'lodash';
import './styles.css';
import cross from './icon-cross.svg';
import moon from './icon-moon.svg';
import sun from './icon-sun.svg';

const crossIcon = document.querySelectorAll('.cross-icon');
document.querySelector('.themeChanger').src = moon;
crossIcon.forEach((element) => {
  element.src = cross;
});
