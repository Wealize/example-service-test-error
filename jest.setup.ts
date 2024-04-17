process.env.NODE_ENV = "local";
process.env.NODE_CONFIG_DIR = "deploy/config";

import 'core-js/features/reflect';
import { resolve } from 'path';
import { container } from 'tsyringe';


process.env.appRoot = resolve(__dirname, 'src');
process.env.apiRoot = `${process.env.appRoot}/core/api`;
process.env.apiPath = `/api`;
