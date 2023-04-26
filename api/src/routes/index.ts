import {Router} from 'express';
import routesUser from './user';
import routesBroker from './broker';
import routesProperty from './property';
import routesSignal from './signal';

const router = Router();

router.use('/user', routesUser);

router.use('/broker', routesBroker);

router.use('/property', routesProperty);

router.use('/property', routesSignal);

export default router;