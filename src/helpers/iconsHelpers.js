import Html5Icon from '../imgs/html5.png';
import Css3Icon from '../imgs/css3.png';
import JSIcon from '../imgs/javascript.png';
import BootstrapIcon from '../imgs/bootstrap.png';
import ReactIcon from '../imgs/react.png';
import NodeIcon from '../imgs/nodejs.png';
import ExpressIcon from '../imgs/express.png';
import MongoIcon from '../imgs/mongodb.png';
import MongooseIcon from '../imgs/mongoose.png';
import PassportIcon from '../imgs/passportjs.png';
import CloudinaryIcon from '../imgs/cloudinary.png';
import GitIcon from '../imgs/git.png';
import NpmIcon from '../imgs/npm.png';
import WebpackIcon from '../imgs/webpack.png';
import GithubIcon from '../imgs/github.png';

const frontendIcons = [
    { source: Html5Icon, name: 'Html5' },
    { source: Css3Icon, name: 'Css3' },
    { source: JSIcon, name: 'JS' },
    { source: BootstrapIcon, name: 'Bootstrap' },
    { source: ReactIcon, name: 'ReactJs' },
];

const backendIcons = [
    { source: NodeIcon, name: 'NodeJs' },
    { source: ExpressIcon, name: 'Express', shorten: true },
    { source: MongoIcon, name: 'Mongodb' },
    { source: MongooseIcon, name: 'Mongoose', shorten: true },
    { source: PassportIcon, name: 'PassportJs' },
    { source: CloudinaryIcon, name: 'Cloudinary' },
];

const miscIcons = [
    { source: GitIcon, name: 'Git' },
    { source: NpmIcon, name: 'NPM' },
    { source: WebpackIcon, name: 'Webpack' },
    { source: GithubIcon, name: 'GitHub' },
];

export {frontendIcons, backendIcons, miscIcons}